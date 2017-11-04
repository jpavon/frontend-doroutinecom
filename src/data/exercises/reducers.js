import * as types from 'data/exercises/types'
import { fetchStatusTypes } from 'shared/types'
import { updateItem, insertItem, deleteItem, defaultFetch, defaultFailure } from 'data/helpers'

const initialState = {
    fetchStatus: fetchStatusTypes.NONE,
    entities: []
}

const exercises = (state = initialState, action) => {
    const { type, payload, error, meta } = action

    switch (type) {
        case types.EXERCISES_FETCH_REQUEST:
            return defaultFetch(state)

        case types.EXERCISES_FETCH_SUCCESS:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.LOADED,
                entities: payload
            }

        case types.EXERCISES_FETCH_FAILURE:
            return defaultFailure(state, error)

        case types.EXERCISE_POST_REQUEST:
            return defaultFetch(state)

        case types.EXERCISE_POST_SUCCESS:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.LOADED,
                entities: insertItem(state.entities, payload)
            }

        case types.EXERCISE_POST_FAILURE:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.FAILED,
                error: error
            }

        case types.EXERCISE_PUT_REQUEST:
            return defaultFetch(state)

        case types.EXERCISE_PUT_SUCCESS:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.LOADED,
                entities: updateItem(state.entities, payload)
            }

        case types.EXERCISE_PUT_FAILURE:
            return defaultFailure(state, error)

        case types.EXERCISE_DELETE_REQUEST:
            return defaultFetch(state)

        case types.EXERCISE_DELETE_SUCCESS:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.LOADED,
                entities: deleteItem(state.entities, meta.id)
            }

        case types.EXERCISE_DELETE_FAILURE:
            return defaultFailure(state, error)

        default:
            return state
    }
}

export default exercises
