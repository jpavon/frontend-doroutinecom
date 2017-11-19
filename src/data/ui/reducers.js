import * as types from 'data/ui/types'

const initialState = {
    isEditing: false
}

const ui = (state = initialState, action) => {
    const { type } = action

    switch (type) {
        case types.TOGGLE_IS_EDITING:
            return {
                ...state,
                isEditing: !state.isEditing
            }

        default:
            return state
    }
}

export default ui
