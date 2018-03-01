import { IApiSuccess, IApiFailure, IData } from 'data/types'
import { ILoginData, IRegisterData, IPasswordForgottenData, IPasswordResetData } from 'data/user/types'

import * as constants from 'data/user/constants'

// get
export const getUser = () => ({
    type: constants.USER_GET_REQUEST,
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
export const putUser = (id: number, data: IData) => ({
    type: constants.USER_PUT_REQUEST,
    id,
    data
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
export const loginUser = (data: ILoginData, reject: () => void) => ({
    type: constants.USER_LOGIN_REQUEST,
    data,
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
export const registerUser = (data: IRegisterData) => ({
    type: constants.USER_REGISTER_REQUEST,
    data
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
    data
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
export const passwordResetUser = (data: IPasswordResetData) => ({
    type: constants.USER_PASSWORD_RESET_REQUEST,
    data
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
