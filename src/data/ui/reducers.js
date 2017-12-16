import * as types from 'data/ui/types'

const initialState = {
    isLoading: true,
    error: false
}

const ui = (state = initialState, action) => {
    const { type, message } = action

    switch (type) {
        case types.DISPLAY_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case types.REMOVE_LOADING:
            return {
                ...state,
                isLoading: false
            }

        case types.ADD_ERROR:
            return {
                ...state,
                error: message
            }

        case types.REMOVE_ERROR:
            return {
                ...state,
                error: false
            }

        default:
            return state
    }
}

export default ui
