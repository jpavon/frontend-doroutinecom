import { ActionsObservable, ofType } from 'redux-observable'
import {
    tap,
    map,
    startWith,
    ignoreElements,
    switchMap,
    mapTo
} from 'rxjs/operators'
import * as store from 'store'

import * as actions from 'data/user/actions'
import apiEpic from 'utils/apiEpic'
import constants from 'data/user/constants'
import * as appActions from 'data/actions'
import * as uiActions from 'data/ui/actions'

const getUserEpic = apiEpic(
    actions.getUserRequest,
    actions.getUserSuccess,
    actions.getUserFailure
)

const putUserEpic = apiEpic(
    actions.putUserRequest,
    actions.putUserSuccess,
    actions.putUserFailure
)

const loginUserEpic = apiEpic(
    actions.loginUserRequest,
    actions.loginUserSuccess,
    actions.loginUserFailure
)

const registerUserEpic = apiEpic(
    actions.registerUserRequest,
    actions.registerUserSuccess,
    actions.registerUserFailure
)

const passwordForgottenUserEpic = apiEpic(
    actions.passwordForgottenUserRequest,
    actions.passwordForgottenUserSuccess,
    actions.passwordForgottenUserFailure
)

const authPasswordForgottenSuccessEpic = (
    action$: ActionsObservable<
        ReturnType<typeof actions.passwordForgottenUserSuccess>
    >
) =>
    action$.pipe(
        ofType(constants.USER_PASSWORD_FORGOTTEN_SUCCESS),
        mapTo(
            uiActions.showAlert({
                type: 'success',
                message: 'A password reset email has been sent.'
            })
        )
    )

const passwordResetUserEpic = apiEpic(
    actions.passwordResetUserRequest,
    actions.passwordResetUserSuccess,
    actions.passwordResetUserFailure
)

const authPasswordResetSuccessEpic = (
    action$: ActionsObservable<
        ReturnType<typeof actions.passwordResetUserSuccess>
    >
) =>
    action$.pipe(
        ofType(constants.USER_PASSWORD_RESET_SUCCESS),
        mapTo(
            uiActions.showAlert({
                type: 'success',
                message: 'Your password has been reset, login again.'
            })
        )
    )

const authErrorEpic = (
    action$: ActionsObservable<
        | ReturnType<typeof actions.loginUserFailure>
        | ReturnType<typeof actions.registerUserFailure>
        | ReturnType<typeof actions.passwordForgottenUserFailure>
        | ReturnType<typeof actions.passwordResetUserFailure>
    >
) =>
    action$.pipe(
        ofType(
            constants.USER_LOGIN_FAILURE,
            constants.USER_REGISTER_FAILURE,
            constants.USER_PASSWORD_FORGOTTEN_FAILURE,
            constants.USER_PASSWORD_RESET_FAILURE
        ),
        map((action) =>
            uiActions.showAlert({
                type: 'error',
                message: action.error.errors
            })
        )
    )

const authSuccessEpic = (
    action$: ActionsObservable<
        | ReturnType<typeof actions.loginUserSuccess>
        | ReturnType<typeof actions.registerUserSuccess>
    >
) =>
    action$.pipe(
        ofType(constants.USER_LOGIN_SUCCESS, constants.USER_REGISTER_SUCCESS),
        switchMap((action) =>
            action$.pipe(
                tap(() => store.set('token', action.payload.token)),
                ignoreElements(),
                startWith(actions.authUser()),
                startWith(appActions.getAppData())
            )
        )
    )

const unauthUserEpic = (
    action$: ActionsObservable<ReturnType<typeof actions.unauthUser>>
) =>
    action$.pipe(
        ofType(constants.USER_UNAUTH),
        tap(() => store.remove('token')),
        ignoreElements()
    )

export default [
    getUserEpic,
    putUserEpic,
    loginUserEpic,
    registerUserEpic,
    passwordForgottenUserEpic,
    passwordResetUserEpic,
    authPasswordForgottenSuccessEpic,
    authPasswordResetSuccessEpic,
    authErrorEpic,
    authSuccessEpic,
    unauthUserEpic
]
