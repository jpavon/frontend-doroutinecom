import { IApiFailure } from 'data/types'
import {
    IUser,
    ILoginData,
    IRegisterData,
    IPasswordForgottenData,
    IPasswordResetData,
    IUserRequestData
} from 'data/user/types'

import constants from 'data/user/constants'

// get
export const getUser = () => ({
    type: constants.USER_GET_REQUEST as constants.USER_GET_REQUEST,
    method: 'get',
    endpoint: 'user'
})

export const getUserSuccess = (payload: IUser) => ({
    type: constants.USER_GET_SUCCESS as constants.USER_GET_SUCCESS,
    payload
})

export const getUserFailure = (payload: IApiFailure) => ({
    type: constants.USER_GET_FAILURE as constants.USER_GET_FAILURE,
    error: payload
})

// put
export const putUser = (
    id: number,
    data: IUserRequestData,
    resolve: () => void,
    reject: () => void
) => ({
    type: constants.USER_PUT_REQUEST as constants.USER_PUT_REQUEST,
    method: 'put',
    endpoint: 'user',
    data,
    resolve,
    reject
})

export const putUserSuccess = (payload: IUser) => ({
    type: constants.USER_PUT_SUCCESS as constants.USER_PUT_SUCCESS,
    payload
})

export const putUserFailure = (payload: IApiFailure) => ({
    type: constants.USER_PUT_FAILURE as constants.USER_PUT_FAILURE,
    error: payload
})

// login
export const loginUser = (
    data: ILoginData,
    resolve: () => void,
    reject: () => void
) => ({
    type: constants.USER_LOGIN_REQUEST as constants.USER_LOGIN_REQUEST,
    method: 'post',
    endpoint: 'login',
    data,
    resolve,
    reject
})

export const loginUserSuccess = (payload: IUser) => ({
    type: constants.USER_LOGIN_SUCCESS as constants.USER_LOGIN_SUCCESS,
    payload
})

export const loginUserFailure = (payload: IApiFailure) => ({
    type: constants.USER_LOGIN_FAILURE as constants.USER_LOGIN_FAILURE,
    error: payload
})

// register
export const registerUser = (
    data: IRegisterData,
    resolve: () => void,
    reject: () => void
) => ({
    type: constants.USER_REGISTER_REQUEST as constants.USER_REGISTER_REQUEST,
    method: 'post',
    endpoint: 'register',
    data,
    resolve,
    reject
})

export const registerUserSuccess = (payload: IUser) => ({
    type: constants.USER_REGISTER_SUCCESS as constants.USER_REGISTER_SUCCESS,
    payload
})

export const registerUserFailure = (payload: IApiFailure) => ({
    type: constants.USER_REGISTER_FAILURE as constants.USER_REGISTER_FAILURE,
    error: payload
})

// passwordForgotten
export const passwordForgottenUser = (data: IPasswordForgottenData) => ({
    type: constants.USER_PASSWORD_FORGOTTEN_REQUEST as constants.USER_PASSWORD_FORGOTTEN_REQUEST,
    method: 'post',
    endpoint: 'password/email',
    data
})

export const passwordForgottenUserSuccess = () => ({
    type: constants.USER_PASSWORD_FORGOTTEN_SUCCESS as constants.USER_PASSWORD_FORGOTTEN_SUCCESS
})

export const passwordForgottenUserFailure = (payload: IApiFailure) => ({
    type: constants.USER_PASSWORD_FORGOTTEN_FAILURE as constants.USER_PASSWORD_FORGOTTEN_FAILURE,
    error: payload
})

// passwordReset
export const passwordResetUser = (
    data: IPasswordResetData,
    resolve: () => void,
    reject: () => void
) => ({
    type: constants.USER_PASSWORD_RESET_REQUEST as constants.USER_PASSWORD_RESET_REQUEST,
    method: 'post',
    endpoint: 'password/reset',
    data,
    resolve,
    reject
})

export const passwordResetUserSuccess = () => ({
    type: constants.USER_PASSWORD_RESET_SUCCESS as constants.USER_PASSWORD_RESET_SUCCESS
})

export const passwordResetUserFailure = (payload: IApiFailure) => ({
    type: constants.USER_PASSWORD_RESET_FAILURE as constants.USER_PASSWORD_RESET_FAILURE,
    error: payload
})

// auth
export const authUser = () => ({
    type: constants.USER_AUTH as constants.USER_AUTH
})

// unauth
export const unauthUser = (error?: string) => ({
    type: constants.USER_UNAUTH as constants.USER_UNAUTH,
    error
})
