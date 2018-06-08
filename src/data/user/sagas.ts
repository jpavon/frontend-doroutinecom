import { call, put, takeLatest } from 'redux-saga/effects'
import * as store from 'store'

import { IApiAction, ISuccessAction, IFailureAction } from 'data/types'
import { IAuth } from 'data/user/types'
import { unauthUser as unauthUserType } from 'data/user/actions'

import apiSaga from 'utils/apiSaga'
import constants from 'data/user/constants'
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
    yield* apiSaga(
        action,
        actions.registerUserSuccess,
        actions.registerUserFailure
    )
}

function* passwordForgottenUserSaga(action: IApiAction) {
    yield* apiSaga(
        action,
        actions.passwordForgottenUserSuccess,
        actions.passwordForgottenUserFailure
    )
}

function* authPasswordForgottenSuccessSaga() {
    yield put(
        uiActions.showAlert('success', 'A password reset email has been sent.')
    )
}

function* passwordResetUserSaga(action: IApiAction) {
    yield* apiSaga(
        action,
        actions.passwordResetUserSuccess,
        actions.passwordResetUserFailure
    )
}

function* authPasswordResetSuccessSaga() {
    yield put(
        uiActions.showAlert(
            'success',
            'Your password has been reset, login again.'
        )
    )
}

function* authErrorSaga(action: IFailureAction) {
    yield put(uiActions.showAlert('error', action.error.errors))
}

function* authSuccessSaga(action: ISuccessAction<IAuth>) {
    yield put(actions.authUser())

    yield store.set('token', action.payload.token)

    yield call(getAppDataSaga)
}

function* unauthUserSaga(action: ReturnType<typeof unauthUserType>) {
    yield store.remove('token')

    if (action.error) {
        yield put(uiActions.showAlert('error', action.error))
    }
}

export default [
    takeLatest(constants.USER_GET_REQUEST, getUserSaga),
    takeLatest(constants.USER_PUT_REQUEST, putUserSaga),

    takeLatest(constants.USER_LOGIN_REQUEST, loginUserSaga),

    takeLatest(constants.USER_REGISTER_REQUEST, registerUserSaga),

    takeLatest(
        constants.USER_PASSWORD_FORGOTTEN_REQUEST,
        passwordForgottenUserSaga
    ),
    takeLatest(
        constants.USER_PASSWORD_FORGOTTEN_SUCCESS,
        authPasswordForgottenSuccessSaga
    ),

    takeLatest(constants.USER_PASSWORD_RESET_REQUEST, passwordResetUserSaga),
    takeLatest(
        constants.USER_PASSWORD_RESET_SUCCESS,
        authPasswordResetSuccessSaga
    ),

    takeLatest(
        [
            constants.USER_LOGIN_FAILURE,
            constants.USER_REGISTER_FAILURE,
            constants.USER_PASSWORD_FORGOTTEN_FAILURE,
            constants.USER_PASSWORD_RESET_FAILURE
        ],
        authErrorSaga
    ),
    takeLatest(
        [constants.USER_LOGIN_SUCCESS, constants.USER_REGISTER_SUCCESS],
        authSuccessSaga
    ),
    takeLatest(constants.USER_UNAUTH, unauthUserSaga)
]
