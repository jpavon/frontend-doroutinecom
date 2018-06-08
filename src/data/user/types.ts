import { IApiFailure } from 'data/types'
import { statusConstants } from 'data/constants'
import * as actionTypes from 'data/user/actions'

export interface IUser {
    id: number
    name: string
    email: string
    apiToken: string
    weightMeasure: string
    startOfWeek: string
    dateFormat: string
    createdAt: string
    updatedAt: string
}

export interface IAuth {
    token: string
}

export interface IFormatedUser extends IUser {}

export interface IUserState {
    status: statusConstants
    isAuth: boolean
    entity: IUser | null
    error: IApiFailure | null
}

export type IUserRequestData = Partial<IUser>

export type IUserAction = ReturnType<
    typeof actionTypes[keyof typeof actionTypes]
>

export interface ILoginData {
    email: string
    password: string
}

export interface IRegisterData {
    name: string
    email: string
    password: string
    passwordConfirmation: string
}

export interface IPasswordForgottenData {
    email: string
}

export interface IPasswordResetData {
    token: string
    email: string
    password: string
    passwordConfirmation: string
}
