import * as types from 'data/ui/types'

const initialState = {
    // isEditing: false,
    isLoading: true
}

const ui = (state = initialState, action) => {
    const { type } = action

    switch (type) {
        case types.TOGGLE_IS_EDITING:
            return {
                ...state,
                isEditing: !state.isEditing
            }

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

        default:
            return state
    }
}

export default ui
