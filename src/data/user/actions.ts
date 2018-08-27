import { ApiFailure } from 'data/types'
import {
    User,
    LoginData,
    RegisterData,
    PasswordForgottenData,
    PasswordResetData,
    UserRequestData,
    Auth
} from 'data/user/types'

import action from 'utils/action'
import constants from 'data/user/constants'

// get
export const getUserRequest = () =>
    action(constants.USER_GET_REQUEST, {
        method: 'get',
        endpoint: 'user'
    })

export const getUserSuccess = (payload: User) =>
    action(constants.USER_GET_SUCCESS, {
        payload
    })

export const getUserFailure = (payload: ApiFailure) =>
    action(constants.USER_GET_FAILURE, {
        error: payload
    })

// put
export const putUserRequest = (
    _: never,
    data: UserRequestData,
    resolve: () => void,
    reject: () => void
) =>
    action(constants.USER_PUT_REQUEST, {
        method: 'put',
        endpoint: 'user',
        data,
        resolve,
        reject
    })

export const putUserSuccess = (payload: User) =>
    action(constants.USER_PUT_SUCCESS, {
        payload
    })

export const putUserFailure = (payload: ApiFailure) =>
    action(constants.USER_PUT_FAILURE, {
        error: payload
    })

// login
export const loginUserRequest = (
    data: LoginData,
    resolve: () => void,
    reject: () => void
) =>
    action(constants.USER_LOGIN_REQUEST, {
        method: 'post',
        endpoint: 'login',
        data,
        resolve,
        reject
    })

export const loginUserSuccess = (payload: Auth) =>
    action(constants.USER_LOGIN_SUCCESS, {
        payload
    })

export const loginUserFailure = (payload: ApiFailure) =>
    action(constants.USER_LOGIN_FAILURE, {
        error: payload
    })

// register
export const registerUserRequest = (
    data: RegisterData,
    resolve: () => void,
    reject: () => void
) =>
    action(constants.USER_REGISTER_REQUEST, {
        method: 'post',
        endpoint: 'register',
        data,
        resolve,
        reject
    })

export const registerUserSuccess = (payload: Auth) =>
    action(constants.USER_REGISTER_SUCCESS, {
        payload
    })

export const registerUserFailure = (payload: ApiFailure) =>
    action(constants.USER_REGISTER_FAILURE, {
        error: payload
    })

// passwordForgotten
export const passwordForgottenUserRequest = (data: PasswordForgottenData) =>
    action(constants.USER_PASSWORD_FORGOTTEN_REQUEST, {
        method: 'post',
        endpoint: 'password/email',
        data
    })

export const passwordForgottenUserSuccess = () =>
    action(constants.USER_PASSWORD_FORGOTTEN_SUCCESS)

export const passwordForgottenUserFailure = (payload: ApiFailure) =>
    action(constants.USER_PASSWORD_FORGOTTEN_FAILURE, {
        error: payload
    })

// passwordReset
export const passwordResetUserRequest = (
    data: PasswordResetData,
    resolve: () => void,
    reject: () => void
) =>
    action(constants.USER_PASSWORD_RESET_REQUEST, {
        method: 'post',
        endpoint: 'password/reset',
        data,
        resolve,
        reject
    })

export const passwordResetUserSuccess = () =>
    action(constants.USER_PASSWORD_RESET_SUCCESS)

export const passwordResetUserFailure = (payload: ApiFailure) =>
    action(constants.USER_PASSWORD_RESET_FAILURE, {
        error: payload
    })

// auth
export const authUser = () => action(constants.USER_AUTH)

// unauth
export const unauthUser = () => action(constants.USER_UNAUTH)
