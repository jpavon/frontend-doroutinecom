import * as types from 'data/workouts/types'
import { fetchStatusTypes } from 'shared/types'

const initialState = {
    fetchStatus: fetchStatusTypes.NONE,
    entities: []
}

const workouts = (state = initialState, action) => {
    switch (action.type) {
        case types.WORKOUTS_REQUEST:
            return Object.assign({}, state, {
                ...state,
                fetchStatus: fetchStatusTypes.LOADING
            })

        case types.WORKOUTS_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                fetchStatus: fetchStatusTypes.LOADED,
                entities: action.payload
            })

        case types.WORKOUTS_FAILURE:
            return Object.assign({}, state, {
                ...state,
                fetchStatus: fetchStatusTypes.FAILED,
                error: action.error
            })

        default:
            return state
    }
}

export default workouts
