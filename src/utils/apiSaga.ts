import { put, call } from 'redux-saga/effects'

import { IApiAction, IAction } from 'data/types'

import api from 'utils/api'

export default function* apiSaga(
    action: IApiAction,
    successAction: (payload: object) => IAction,
    failureAction: (error: object) => IAction
) {
    try {
        const payload = yield call(api[action.method], action.endpoint, action.data)
        yield put(successAction(payload))
        if (action.resolve) { action.resolve(payload) }
    } catch (error) {
        yield put(failureAction(error))
        if (action.reject) { action.reject(error) }
    }
}
