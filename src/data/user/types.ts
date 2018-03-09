import { IFetchStatus, IApiFailure, IAction, IDataRequestMap } from 'data/types'

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
    fetchStatus: IFetchStatus
    isAuth: boolean
    entity: IUser | null,
    error: IApiFailure | null
}

export type IUserRequestData = IDataRequestMap<IUser>

export interface IUserActionArgs {
    put: (id: number, data: IUserRequestData, resolve: () => void, reject: () => void) => void
    login: (data: ILoginData, resolve: () => void, reject: () => void) => void
    register: (data: IRegisterData, resolve: () => void, reject: () => void) => void,
    passwordForgotten: (data: IPasswordForgottenData) => void,
    passwordReset: (data: IPasswordResetData, resolve: () => void, reject: () => void) => void
}

export interface IUserAction extends IAction {
    payload: IUser
    error: IApiFailure
}

export interface IUnauthAction extends IAction  {
    error?: string
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
