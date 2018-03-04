import { put, call } from 'redux-saga/effects'

import { IApiAction, IAction, ISuccessAction, IFailureAction } from 'data/types'

import api from 'utils/api'

export default function* apiSaga(
    action: IApiAction,
    successAction: (payload: object) => ISuccessAction | IAction,
    errorAction: (error: object) => IFailureAction | IAction
) {
    try {
        const payload = yield call(api[action.method], action.endpoint, action && action.data)
        yield put(successAction(payload))
        if (action && action.resolve) { action.resolve(payload) }
    } catch (error) {
        yield put(errorAction(error))
        if (action && action.reject) { action.reject(error) }
    }
}
