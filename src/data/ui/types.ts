import * as React from 'react'
import { IApiFailure } from 'data/types'
import * as actions from 'data/ui/actions'

export interface IUiState {
    isLoading: boolean
    alert: IAlert | null
    isServerError: boolean
    isOffline: boolean
}

export type IUiAction = ReturnType<typeof actions[keyof typeof actions]>

export interface IAlert {
    type: string
    message: string | string[] | IApiFailure['errors'] | React.ReactNode
}
