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

const createAction = <T extends { type: constants }>(d: T): T => d

// get
export const getUser = () => createAction({
    type: constants.USER_GET_REQUEST,
    method: 'get',
    endpoint: 'user'
})

export const getUserSuccess = (payload: IUser) => createAction({
    type: constants.USER_GET_SUCCESS,
    payload
})

export const getUserFailure = (payload: IApiFailure) => createAction({
    type: constants.USER_GET_FAILURE,
    error: payload
})

// put
export const putUser = (id: number, data: IUserRequestData, resolve: () => void, reject: () => void) => createAction({
    type: constants.USER_PUT_REQUEST,
    method: 'put',
    endpoint: 'user',
    data,
    resolve,
    reject
})

export const putUserSuccess = (payload: IUser) => createAction({
    type: constants.USER_PUT_SUCCESS,
    payload
})

export const putUserFailure = (payload: IApiFailure) => createAction({
    type: constants.USER_PUT_FAILURE,
    error: payload
})

// login
export const loginUser = (data: ILoginData, resolve: () => void, reject: () => void) => createAction({
    type: constants.USER_LOGIN_REQUEST,
    method: 'post',
    endpoint: 'login',
    data,
    resolve,
    reject
})

export const loginUserSuccess = (payload: IUser) => createAction({
    type: constants.USER_LOGIN_SUCCESS,
    payload
})

export const loginUserFailure = (payload: IApiFailure) => createAction({
    type: constants.USER_LOGIN_FAILURE,
    error: payload
})

// register
export const registerUser = (data: IRegisterData, resolve: () => void, reject: () => void) => createAction({
    type: constants.USER_REGISTER_REQUEST,
    method: 'post',
    endpoint: 'register',
    data,
    resolve,
    reject
})

export const registerUserSuccess = (payload: IUser) => createAction({
    type: constants.USER_REGISTER_SUCCESS,
    payload
})

export const registerUserFailure = (payload: IApiFailure) => createAction({
    type: constants.USER_REGISTER_FAILURE,
    error: payload
})

// passwordForgotten
export const passwordForgottenUser = (data: IPasswordForgottenData) => createAction({
    type: constants.USER_PASSWORD_FORGOTTEN_REQUEST,
    method: 'post',
    endpoint: 'password/email',
    data,
})

export const passwordForgottenUserSuccess = () => createAction({
    type: constants.USER_PASSWORD_FORGOTTEN_SUCCESS
})

export const passwordForgottenUserFailure = (payload: IApiFailure) => createAction({
    type: constants.USER_PASSWORD_FORGOTTEN_FAILURE,
    error: payload
})

// passwordReset
export const passwordResetUser = (data: IPasswordResetData, resolve: () => void, reject: () => void) => createAction({
    type: constants.USER_PASSWORD_RESET_REQUEST,
    method: 'post',
    endpoint: 'password/reset',
    data,
    resolve,
    reject
})

export const passwordResetUserSuccess = () => createAction({
    type: constants.USER_PASSWORD_RESET_SUCCESS,
})

export const passwordResetUserFailure = (payload: IApiFailure) => createAction({
    type: constants.USER_PASSWORD_RESET_FAILURE,
    error: payload
})

// auth
export const authUser = () => createAction({
    type: constants.USER_AUTH,
})

// unauth
export const unauthUser = (error?: string) => createAction({
    type: constants.USER_UNAUTH,
    error
})
