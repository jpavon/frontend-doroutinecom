import * as types from 'data/lifts/types'
import * as helperTypes from 'data/shared'
import {
    updateItem,
    insertItem,
    deleteItem,
    defaultRequest,
    defaultFailure
} from 'data/shared'

const initialState = {
    fetchStatus: helperTypes.STATUS_NONE,
    entities: []
}

const lifts = (state = initialState, action) => {
    const { type, payload, error, meta } = action

    switch (type) {
        case types.LIFTS_FETCH_REQUEST:
            return defaultRequest(state)

        case types.LIFTS_FETCH_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entities: payload
            }

        case types.LIFTS_FETCH_FAILURE:
            return defaultFailure(state, error)

        case types.LIFTS_POST_REQUEST:
            return defaultRequest(state)

        case types.LIFTS_POST_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entities: insertItem(state.entities, payload)
            }

        case types.LIFTS_POST_FAILURE:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_FAILED,
                error: error
            }

        case types.LIFTS_PUT_REQUEST:
            return defaultRequest(state)

        case types.LIFTS_PUT_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entities: updateItem(state.entities, payload)
            }

        case types.LIFTS_PUT_FAILURE:
            return defaultFailure(state, error)

        case types.LIFTS_DELETE_REQUEST:
            return defaultRequest(state)

        case types.LIFTS_DELETE_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entities: deleteItem(state.entities, meta.id)
            }

        case types.LIFTS_DELETE_FAILURE:
            return defaultFailure(state, error)

        default:
            return state
    }
}

export default lifts
