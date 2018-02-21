import * as constants from 'data/ui/constants'

const initialState = {
    isLoading: false,
    alert: null,
    isServerError: false,
    isOffline: !window.navigator.onLine
}

const ui = (state = initialState, action) => {
    const { type, alert } = action

    switch (type) {
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
                    type: alert.type,
                    message: alert.message
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
