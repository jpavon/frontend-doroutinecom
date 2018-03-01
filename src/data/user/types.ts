import { IFetchStatus, IApiFailure, IAction } from 'data/types'

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

export interface IFormatedUser extends IUser {}

export interface IUserState {
    fetchStatus: IFetchStatus
    isAuth: boolean
    entity: IUser | null
}

export interface IUserAction extends IAction {
    payload: IUser
    error: IApiFailure
}

export interface ILoginData {
    email: string
    password: string
}

export interface ILoginAction extends IAction {
    data: ILoginData
}

export interface IRegisterData {
    name: string
    email: string
    password: string
    passwordConfirmation: string
}

export interface IRegisterAction extends IAction {
    data: IRegisterData
}

export interface IPasswordForgottenData {
    email: string
}

export interface IPasswordForgottenAction extends IAction {
    data: IPasswordForgottenData
}

export interface IPasswordResetData {
    token: string
    email: string
    password: string
    passwordConfirmation: string
}

export interface IPasswordResetAction extends IAction {
    data: IPasswordResetData
}
