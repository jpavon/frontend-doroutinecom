import * as types from 'data/ui/types'

const initialState = {
    isLoading: false,
    alert: null,
    isServerError: false
}

const ui = (state = initialState, action) => {
    const { type, alert } = action

    switch (type) {
        case types.SHOW_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case types.REMOVE_LOADING:
            return {
                ...state,
                isLoading: false
            }

        case types.SHOW_ALERT:
            return {
                ...state,
                alert: {
                    type: alert.type,
                    message: alert.message
                }
            }

        case types.REMOVE_ALERT:
            return {
                ...state,
                alert: null
            }

        case types.SET_SERVER_ERROR:
            return {
                ...state,
                isServerError: true
            }

        default:
            return state
    }
}

export default ui
