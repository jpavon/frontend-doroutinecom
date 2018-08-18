import * as React from 'react'
import { ApiFailure } from 'data/types'
import * as actions from 'data/ui/actions'
import constants from 'data/ui/constants'

export interface UiState {
    isLoading: boolean
    alert: Alert | null
    isServerError: boolean
    isOffline: boolean
}

export type UiAction =
    | ReturnType<typeof actions[keyof typeof actions]>
    | { type: constants.LOCATION_CHANGE }

export interface Alert {
    type: string
    message: string | string[] | ApiFailure['errors'] | React.ReactNode
}
