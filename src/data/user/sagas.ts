import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import * as store from 'store'

import { IAction, IApiAction } from 'data/types'

import api from 'utils/api'
import * as constants from 'data/user/constants'
import * as actions from 'data/user/actions'
import { fetchAppData } from 'data/sagas'

export function* fetchUserSaga(action: IApiAction) {
    try {
        const payload = yield call(api, action.request)
        yield put(actions.fetchUserAction.success(payload))
    } catch (error) {
        yield put(actions.fetchUserAction.failure(error))
    }
}

export function* loginSaga(action: IApiAction) {
    try {
        const payload = yield call(api, action.request)
        yield put(actions.authUserAction(payload.token))
    } catch (error) {
        // yield put(actions.loginAction.failure(error))
        // SHOW ALERT
        console.log('show error')
    }
}

interface IAuthAction extends IAction {
    token: string
}

export function* authSaga(action: IAuthAction) {
    store.set('token', action.token)

    yield call(fetchAppData)
}

export default function* root() {
    yield all([
        takeLatest(constants.USER_FETCH_REQUEST, fetchUserSaga),
        takeLatest(constants.USER_LOGIN, loginSaga),
        takeEvery(constants.USER_AUTH, authSaga),
    ])
}
