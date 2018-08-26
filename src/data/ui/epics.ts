import { ActionsObservable, ofType } from 'redux-observable'
import { tap, ignoreElements } from 'rxjs/operators'

import scrollTo from 'utils/scrollTo'
import * as actions from 'data/ui/actions'
import constants from 'data/ui/constants'

const scrollToAlertEpic = (
    action$: ActionsObservable<ReturnType<typeof actions.showAlert>>
) =>
    action$.pipe(
        ofType(constants.SHOW_ALERT),
        tap(() => scrollTo('alert')),
        ignoreElements()
    )

export default [scrollToAlertEpic]
