import { put, call } from 'redux-saga/effects'

import { ApiAction, Action } from 'data/types'

import api from 'utils/api'

export default function* apiSaga(
    action: ApiAction,
    successAction: (payload: object) => Action,
    failureAction: (error: object) => Action
) {
    try {
        const payload = yield call(
            api[action.method],
            action.endpoint,
            action.data
        )
        yield put(successAction(payload))
        if (action.resolve) {
            action.resolve(payload)
        }
    } catch (error) {
        yield put(failureAction(error))
        if (action.reject) {
            action.reject(error)
        }
    }
}
