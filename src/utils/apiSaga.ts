import { put, call } from 'redux-saga/effects'

import { AxiosPromise } from 'axios'
import { IApiAction, IAction, ISuccessAction, IFailureAction } from 'data/types'

export default function* apiSaga(
    fn: (endpoint: string, data?: object) => AxiosPromise,
    endpoint: string,
    successAction: (payload?: object) => ISuccessAction | IAction,
    errorAction: (error?: object) => IFailureAction | IAction,
    action?: IApiAction
) {
    try {
        const payload = yield call(fn, endpoint, action && action.data)
        yield put(successAction(payload))
        if (action && action.resolve) { action.resolve(payload) }
    } catch (error) {
        yield put(errorAction(error))
        if (action && action.reject) { action.reject(error) }
    }
}
