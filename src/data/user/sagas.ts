import { call, take, put, spawn, takeLatest } from 'redux-saga/effects'
import * as store from 'store'

import { IApiAction } from 'data/types'

import api from 'utils/api'
import * as constants from 'data/user/constants'
import * as actions from 'data/user/actions'
// import * as uiActions from 'data/ui/actions'
import { fetchAppData, apiSaga } from 'data/sagas'

function* getUserSaga() {
    yield* apiSaga(
        api.get,
        { endpoint: 'user' },
        actions.getUserSuccess,
        actions.getUserFailure
    )
}

function* putUserSaga(action: IApiAction) {
    yield* apiSaga(
        api.put,
        { endpoint: 'user', data: action.data },
        actions.putUserSuccess,
        actions.putUserFailure
    )
}

function* loginUserSaga(action: IApiAction) {
    yield* apiSaga(
        api.post,
        { endpoint: 'login', data: action.data },
        actions.loginUserSuccess,
        actions.loginUserFailure
    )
}

function* registerUserSaga(action: IApiAction) {
    yield* apiSaga(
        api.post,
        { endpoint: 'register', data: action.data },
        actions.registerUserSuccess,
        actions.registerUserFailure
    )
}

function* passwordForgottenUserSaga(action: IApiAction) {
    yield* apiSaga(
        api.post,
        { endpoint: 'password/email', data: action.data },
        actions.passwordForgottenUserSuccess,
        actions.passwordForgottenUserFailure
    )
}

function* passwordResetUserSaga(action: IApiAction) {
    yield* apiSaga(
        api.post,
        { endpoint: 'password/reset', data: action.data },
        actions.passwordResetUserSuccess,
        actions.passwordResetUserFailure
    )
}

function* authErrorSaga() {
    while (true) {
        const { error } = yield take([
            constants.USER_LOGIN_FAILURE,
            constants.USER_REGISTER_FAILURE
        ])

        console.log('show error', error)
    }
}

function* authSaga() {
    while (true) {
        const { payload } = yield take([
            constants.USER_LOGIN_SUCCESS,
            constants.USER_REGISTER_SUCCESS
        ])

        yield put(actions.authUser())

        store.set('token', payload.token)

        yield call(fetchAppData)
    }
}

function* unauthUserSaga() {
    while (true) {
        const { error } = yield take(constants.USER_UNAUTH)

        store.remove('token')

        if (error) {
            console.log('show error')
            // showAlert('error', error))
        }
    }
}

export default [
    takeLatest(constants.USER_GET_REQUEST, getUserSaga),
    takeLatest(constants.USER_PUT_REQUEST, putUserSaga),
    takeLatest(constants.USER_LOGIN_REQUEST, loginUserSaga),
    takeLatest(constants.USER_REGISTER_REQUEST, registerUserSaga),
    takeLatest(constants.USER_PASSWORD_FORGOTTEN_REQUEST, passwordForgottenUserSaga),
    takeLatest(constants.USER_PASSWORD_RESET_REQUEST, passwordResetUserSaga),
    spawn(authSaga),
    spawn(unauthUserSaga),
    spawn(authErrorSaga)
]
