import * as React from 'react'
import { ApiFailure } from 'data/types'
import * as actions from 'data/ui/actions'

export interface UiState {
    isLoading: boolean
    alert: Alert | null
    isServerError: boolean
    isOffline: boolean
}

export type UiAction = ReturnType<typeof actions[keyof typeof actions]>

export interface Alert {
    type: string
    message: string | string[] | ApiFailure['errors'] | React.ReactNode
}
