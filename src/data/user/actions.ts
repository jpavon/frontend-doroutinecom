import { IApiSuccess, IApiFailure, IData } from 'data/types'
import { ILoginData, IRegisterData, IPasswordForgottenData, IPasswordResetData } from 'data/user/types'

import * as constants from 'data/user/constants'

// get
export const getUser = () => ({
    type: constants.USER_GET_REQUEST,
    endpoint: 'user'
})

export const getUserSuccess = (payload: IApiSuccess) => ({
    type: constants.USER_GET_SUCCESS,
    payload
})

export const getUserFailure = (payload: IApiFailure) => ({
    type: constants.USER_GET_FAILURE,
    error: payload
})

// put
export const putUser = (id: number, data: IData, resolve: () => void, reject: () => void) => ({
    type: constants.USER_PUT_REQUEST,
    endpoint: 'user',
    data,
    resolve,
    reject
})

export const putUserSuccess = (payload: IApiSuccess) => ({
    type: constants.USER_PUT_SUCCESS,
    payload
})

export const putUserFailure = (payload: IApiFailure) => ({
    type: constants.USER_PUT_FAILURE,
    error: payload
})

// login
export const loginUser = (data: ILoginData, resolve: () => void, reject: () => void) => ({
    type: constants.USER_LOGIN_REQUEST,
    endpoint: 'login',
    data,
    resolve,
    reject
})

export const loginUserSuccess = (payload: IApiSuccess) => ({
    type: constants.USER_LOGIN_SUCCESS,
    payload
})

export const loginUserFailure = (payload: IApiFailure) => ({
    type: constants.USER_LOGIN_FAILURE,
    error: payload
})

// register
export const registerUser = (data: IRegisterData, resolve: () => void, reject: () => void) => ({
    type: constants.USER_REGISTER_REQUEST,
    endpoint: 'register',
    data,
    resolve,
    reject
})

export const registerUserSuccess = (payload: IApiSuccess) => ({
    type: constants.USER_REGISTER_SUCCESS,
    payload
})

export const registerUserFailure = (payload: IApiFailure) => ({
    type: constants.USER_REGISTER_FAILURE,
    error: payload
})

// passwordForgotten
export const passwordForgottenUser = (data: IPasswordForgottenData) => ({
    type: constants.USER_PASSWORD_FORGOTTEN_REQUEST,
    endpoint: 'password/email',
    data,
})

export const passwordForgottenUserSuccess = (payload: IApiSuccess) => ({
    type: constants.USER_PASSWORD_FORGOTTEN_SUCCESS,
    payload
})

export const passwordForgottenUserFailure = (payload: IApiFailure) => ({
    type: constants.USER_PASSWORD_FORGOTTEN_FAILURE,
    error: payload
})

// passwordReset
export const passwordResetUser = (data: IPasswordResetData, resolve: () => void, reject: () => void) => ({
    type: constants.USER_PASSWORD_RESET_REQUEST,
    endpoint: 'password/reset',
    data,
    resolve,
    reject
})

export const passwordResetUserSuccess = (payload: IApiSuccess) => ({
    type: constants.USER_PASSWORD_RESET_SUCCESS,
    payload
})

export const passwordResetUserFailure = (payload: IApiFailure) => ({
    type: constants.USER_PASSWORD_RESET_FAILURE,
    error: payload
})

// auth
export const authUser = () => ({
    type: constants.USER_AUTH,
})

// unauth
export const unauthUser = (error?: string) => ({
    type: constants.USER_UNAUTH,
    error
})