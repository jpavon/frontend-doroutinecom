import { IFetchStatus, IApiError, IAction } from 'data/types'

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

export interface IFormatedUser extends IUser {

}

export interface IUserState {
    fetchStatus: IFetchStatus
    isAuth: boolean
    entity: IUser | null
}

export interface IUserAction extends IAction {
    payload: IUser
    error: IApiError
}
