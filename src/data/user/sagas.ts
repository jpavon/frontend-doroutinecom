import { call, take, put, spawn, takeLatest } from 'redux-saga/effects'
import * as store from 'store'

import { IApiAction } from 'data/types'

import apiSaga from 'utils/apiSaga'
import * as constants from 'data/user/constants'
import * as actions from 'data/user/actions'
import * as uiActions from 'data/ui/actions'
import { getAppDataSaga } from 'data/sagas'

function* getUserSaga(action: IApiAction) {
    yield* apiSaga(action, actions.getUserSuccess, actions.getUserFailure)
}

function* putUserSaga(action: IApiAction) {
    yield* apiSaga(action, actions.putUserSuccess, actions.putUserFailure)
}

function* loginUserSaga(action: IApiAction) {
    yield* apiSaga(action, actions.loginUserSuccess, actions.loginUserFailure)
}

function* registerUserSaga(action: IApiAction) {
    yield* apiSaga(action, actions.registerUserSuccess, actions.registerUserFailure)
}

function* passwordForgottenUserSaga(action: IApiAction) {
    yield* apiSaga(action, actions.passwordForgottenUserSuccess, actions.passwordForgottenUserFailure)
}

function* passwordResetUserSaga(action: IApiAction) {
    yield* apiSaga(action, actions.passwordResetUserSuccess, actions.passwordResetUserFailure)
}

function* authErrorSaga() {
    while (true) {
        const { error } = yield take([
            constants.USER_LOGIN_FAILURE,
            constants.USER_REGISTER_FAILURE,
            constants.USER_PASSWORD_FORGOTTEN_FAILURE,
            constants.USER_PASSWORD_RESET_FAILURE
        ])

        yield put(uiActions.showAlert('error', error.errors))
    }
}

function* authPasswordResetSuccessSaga() {
    while (true) {
        yield take(constants.USER_PASSWORD_RESET_SUCCESS)

        yield put(uiActions.showAlert('success', 'Your password has been reset, login again.'))
    }
}

function* authPasswordForgottenSuccessSaga() {
    while (true) {
        yield take(constants.USER_PASSWORD_FORGOTTEN_SUCCESS)

        yield put(uiActions.showAlert('success', 'A password reset email has been sent.'))
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

        yield call(getAppDataSaga)
    }
}

function* unauthUserSaga() {
    while (true) {
        const { error } = yield take(constants.USER_UNAUTH)

        store.remove('token')

        if (error) {
            yield put(uiActions.showAlert('error', error))
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
    spawn(authPasswordResetSuccessSaga),
    spawn(authPasswordForgottenSuccessSaga),
    spawn(authErrorSaga)
]
