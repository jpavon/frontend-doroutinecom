import * as types from 'data/workouts/types'
import { fetchStatusTypes } from 'shared/types'
import { updateItem, insertItem, deleteItem } from 'data/helpers'

const initialState = {
    fetchStatus: fetchStatusTypes.NONE,
    entities: []
}

const workouts = (state = initialState, action) => {
    switch (action.type) {
        case types.WORKOUTS_FETCH_REQUEST:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.LOADING
            }

        case types.WORKOUTS_FETCH_SUCCESS:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.LOADED,
                entities: action.payload
            }

        case types.WORKOUTS_FETCH_FAILURE:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.FAILED,
                error: action.error
            }

        case types.WORKOUT_POST_REQUEST:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.LOADING
            }

        case types.WORKOUT_POST_SUCCESS:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.LOADED,
                entities: insertItem(state.entities, action.payload)
            }

        case types.WORKOUT_POST_FAILURE:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.FAILED,
                error: action.error
            }

        case types.WORKOUT_PUT_REQUEST:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.LOADING
            }

        case types.WORKOUT_PUT_SUCCESS:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.LOADED,
                entities: updateItem(state.entities, action.payload)
            }

        case types.WORKOUT_PUT_FAILURE:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.FAILED,
                error: action.error
            }

        case types.WORKOUT_DELETE_REQUEST:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.LOADING
            }

        case types.WORKOUT_DELETE_SUCCESS:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.LOADED,
                entities: deleteItem(state.entities, action.meta.id)
            }

        case types.WORKOUT_DELETE_FAILURE:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.FAILED,
                error: action.error
            }

        default:
            return state
    }
}

export default workouts
