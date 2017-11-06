import * as types from 'data/exercises/types'
import * as helperTypes from 'data/types'
import { updateItem, insertItem, deleteItem, defaultFetch, defaultFailure, defaultMounted } from 'data/helpers'

const initialState = {
    fetchStatus: helperTypes.STATUS_NONE,
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
                fetchStatus: helperTypes.STATUS_LOADED,
                entities: payload
            }

        case types.EXERCISES_FETCH_FAILURE:
            return defaultFailure(state, error)

        case types.EXERCISES_POST_REQUEST:
            return defaultFetch(state)

        case types.EXERCISES_POST_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entities: insertItem(state.entities, payload)
            }

        case types.EXERCISES_POST_FAILURE:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_FAILED,
                error: error
            }

        case types.EXERCISES_PUT_REQUEST:
            return defaultFetch(state)

        case types.EXERCISES_PUT_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entities: updateItem(state.entities, payload)
            }

        case types.EXERCISES_PUT_FAILURE:
            return defaultFailure(state, error)

        case types.EXERCISES_DELETE_REQUEST:
            return defaultFetch(state)

        case types.EXERCISES_DELETE_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entities: deleteItem(state.entities, meta.id)
            }

        case types.EXERCISES_DELETE_FAILURE:
            return defaultFailure(state, error)

        case helperTypes.MOUNTED:
            return defaultMounted(state)

        default:
            return state
    }
}

export default exercises
