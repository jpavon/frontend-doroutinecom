import { ActionsObservable, ofType } from 'redux-observable'
import { of } from 'rxjs/index'
import { mergeMap, map, catchError, tap } from 'rxjs/operators'

import api from 'utils/api'

type RequestAction = (
    // tslint:disable-next-line:no-any
    ...args: any[]
) => {
    type: string
    method: string
    endpoint: string
    data?: object
    resolve?: () => void
    reject?: (data: object) => void
}

type SuccessAction = (
    // tslint:disable-next-line:no-any
    ...args: any[]
) => {
    type: string
    payload?: object
}

type FailureAction = (
    error: object
) => {
    type: string
    error: object
}

const apiEpic = <
    R extends RequestAction,
    S extends SuccessAction,
    F extends FailureAction
>(
    requestAction: R,
    successAction: S,
    failureAction: F
) => (action$: ActionsObservable<ReturnType<typeof requestAction>>) =>
    action$.pipe(
        ofType(requestAction().type),
        mergeMap((action) =>
            api(
                action.method,
                action.endpoint,
                action.data && action.data
            ).pipe(
                map((data) => successAction(data)),
                tap(() => action.resolve && action.resolve()),
                catchError((data) =>
                    of(failureAction(data)).pipe(
                        tap(() => action.reject && action.reject(data))
                    )
                )
            )
        )
    )

export default apiEpic
