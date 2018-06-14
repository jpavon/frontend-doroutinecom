import { IUiState, IUiAction } from 'data/ui/types'

import constants from 'data/ui/constants'

const initialState: Readonly<IUiState> = {
    isLoading: false,
    alert: null,
    isServerError: false,
    isOffline: !window.navigator.onLine
}

const ui = (state = initialState, action: IUiAction): IUiState => {
    switch (action.type) {
        case constants.SHOW_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case constants.REMOVE_LOADING:
            return {
                ...state,
                isLoading: false
            }

        case constants.SHOW_ALERT:
            return {
                ...state,
                alert: {
                    type: action.type,
                    message: action.message
                }
            }

        case constants.REMOVE_ALERT:
            return {
                ...state,
                alert: null
            }

        case constants.SET_SERVER_ERROR:
            return {
                ...state,
                isServerError: true
            }

        case constants.SET_OFFLINE:
            return {
                ...state,
                isOffline: true
            }

        default:
            return state
    }
}

export default ui
