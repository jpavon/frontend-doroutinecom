import { IAction } from 'data/types'

export interface IAlert {
    type: string
    message: string | string[]
}

export interface IUiState {
    isLoading: boolean
    alert: IAlert | null
    isServerError: boolean
    isOffline: boolean
}

export interface IUiAction extends IAction {
    alert?: IAlert
}
