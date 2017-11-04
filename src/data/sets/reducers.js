import * as types from 'data/sets/types'
import { fetchStatusTypes } from 'shared/types'
import { updateItem, insertItem, deleteItem, defaultFetch, defaultFailure } from 'data/helpers'

const initialState = {
    fetchStatus: fetchStatusTypes.NONE,
    entities: []
}

const exercises = (state = initialState, action) => {
    const { type, payload, error, meta } = action

    switch (type) {
        case types.SETS_FETCH_REQUEST:
            return defaultFetch(state)

        case types.SETS_FETCH_SUCCESS:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.LOADED,
                entities: payload
            }

        case types.SETS_FETCH_FAILURE:
            return defaultFailure(state, error)

        case types.SET_POST_REQUEST:
            return defaultFetch(state)

        case types.SET_POST_SUCCESS:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.LOADED,
                entities: insertItem(state.entities, payload)
            }

        case types.SET_POST_FAILURE:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.FAILED,
                error: error
            }

        case types.SET_PUT_REQUEST:
            return defaultFetch(state)

        case types.SET_PUT_SUCCESS:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.LOADED,
                entities: updateItem(state.entities, payload)
            }

        case types.SET_PUT_FAILURE:
            return defaultFailure(state, error)

        case types.SET_DELETE_REQUEST:
            return defaultFetch(state)

        case types.SET_DELETE_SUCCESS:
            return {
                ...state,
                fetchStatus: fetchStatusTypes.LOADED,
                entities: deleteItem(state.entities, meta.id)
            }

        case types.SET_DELETE_FAILURE:
            return defaultFailure(state, error)

        default:
            return state
    }
}

export default exercises
