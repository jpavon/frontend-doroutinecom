import * as React from 'react'
import { IAction, IApiFailure } from 'data/types'

export interface IUiState {
    isLoading: boolean
    alert: IAlert | null
    isServerError: boolean
    isOffline: boolean
}

export interface IUiAction extends IAction {
    alert?: IAlert
}

export interface IAlert {
    type: string
    message: string | string[] | IApiFailure['errors'] | React.ReactNode
}
