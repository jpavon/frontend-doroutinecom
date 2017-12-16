import * as types from 'data/sets/types'
import * as helperTypes from 'data/utils'
import {
    updateItem,
    insertItem,
    deleteItem,
    request,
    failure
} from 'data/utils'

const initialState = {
    fetchStatus: helperTypes.STATUS_NONE,
    entities: []
}

const exercises = (state = initialState, action) => {
    const { type, payload, error, meta } = action

    switch (type) {
        case types.SETS_FETCH_REQUEST:
            return request(state)

        case types.SETS_FETCH_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entities: payload
            }

        case types.SETS_FETCH_FAILURE:
            return failure(state, error)

        case types.SETS_POST_REQUEST:
            return request(state)

        case types.SETS_POST_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entities: insertItem(state.entities, payload)
            }

        case types.SETS_POST_FAILURE:
            return failure(state, error)

        case types.SETS_PUT_REQUEST:
            return request(state)

        case types.SETS_PUT_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entities: updateItem(state.entities, payload)
            }

        case types.SETS_PUT_FAILURE:
            return failure(state, error)

        case types.SETS_DELETE_REQUEST:
            return request(state)

        case types.SETS_DELETE_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entities: deleteItem(state.entities, meta.id)
            }

        case types.SETS_DELETE_FAILURE:
            return failure(state, error)

        default:
            return state
    }
}

export default exercises
