import { all, call, put, takeLatest } from 'redux-saga/effects'
import * as store from 'store'

import { IAction, IApiAction } from 'data/types'

import api from 'utils/api'
import * as constants from 'data/user/constants'
import * as actions from 'data/user/actions'
// import * as uiActions from 'data/ui/actions'
import { fetchAppData, apiSaga } from 'data/sagas'

export function* fetchUserSaga() {
    yield* apiSaga(
        api.get('user'),
        actions.fetchUserSuccess,
        actions.fetchUserFailure
    )
}

export function* loginSaga(action: IApiAction) {
    try {
        const payload = yield call(api, action.request)
        yield put(actions.authUserAction(payload.token))
    } catch (error) {
        // yield put(uiActions.showAlert(''))
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
        takeLatest(constants.USER_AUTH, authSaga),
    ])
}
