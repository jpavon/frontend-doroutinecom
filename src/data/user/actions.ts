import { ApiFailure } from 'data/types'
import {
    User,
    LoginData,
    RegisterData,
    PasswordForgottenData,
    PasswordResetData,
    UserRequestData
} from 'data/user/types'

import action from 'utils/action'
import constants from 'data/user/constants'

// get
export const getUser = () =>
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
export const putUser = (
    id: number,
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
export const loginUser = (
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

export const loginUserSuccess = (payload: User) =>
    action(constants.USER_LOGIN_SUCCESS, {
        payload
    })

export const loginUserFailure = (payload: ApiFailure) =>
    action(constants.USER_LOGIN_FAILURE, {
        error: payload
    })

// register
export const registerUser = (
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

export const registerUserSuccess = (payload: User) =>
    action(constants.USER_REGISTER_SUCCESS, {
        payload
    })

export const registerUserFailure = (payload: ApiFailure) =>
    action(constants.USER_REGISTER_FAILURE, {
        error: payload
    })

// passwordForgotten
export const passwordForgottenUser = (data: PasswordForgottenData) =>
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
export const passwordResetUser = (
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
export const unauthUser = (error?: string) =>
    action(constants.USER_UNAUTH, {
        error
    })
