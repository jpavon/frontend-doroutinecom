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
        'user',
        actions.getUserSuccess,
        actions.getUserFailure
    )
}

function* putUserSaga(action: IApiAction) {
    yield* apiSaga(
        api.put,
        'user',
        actions.putUserSuccess,
        actions.putUserFailure,
        action
    )
}

function* loginUserSaga(action: IApiAction) {
    yield* apiSaga(
        api.post,
        'login',
        actions.loginUserSuccess,
        actions.loginUserFailure,
        action
    )
}

function* registerUserSaga(action: IApiAction) {
    yield* apiSaga(
        api.post,
        'register',
        actions.registerUserSuccess,
        actions.registerUserFailure,
        action
    )
}

function* passwordForgottenUserSaga(action: IApiAction) {
    yield* apiSaga(
        api.post,
        'password/email',
        actions.passwordForgottenUserSuccess,
        actions.passwordForgottenUserFailure,
        action
    )
}

function* passwordResetUserSaga(action: IApiAction) {
    yield* apiSaga(
        api.post,
        'password/reset',
        actions.passwordResetUserSuccess,
        actions.passwordResetUserFailure,
        action
    )
}

function* authErrorSaga() {
    while (true) {
        const { error } = yield take([
            constants.USER_LOGIN_FAILURE,
            constants.USER_REGISTER_FAILURE,
            constants.USER_PASSWORD_FORGOTTEN_FAILURE,
            constants.USER_PASSWORD_RESET_FAILURE
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
