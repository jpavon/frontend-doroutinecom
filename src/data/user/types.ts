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
