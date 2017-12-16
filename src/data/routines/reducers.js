import * as types from 'data/routines/types'
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

const routines = (state = initialState, action) => {
    const { type, payload, error, meta } = action

    switch (type) {
        case types.ROUTINES_FETCH_REQUEST:
            return request(state)

        case types.ROUTINES_FETCH_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entities: payload
            }

        case types.ROUTINES_FETCH_FAILURE:
            return failure(state, error)

        case types.ROUTINES_POST_REQUEST:
            return request(state)

        case types.ROUTINES_POST_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entities: insertItem(state.entities, payload)
            }

        case types.ROUTINES_POST_FAILURE:
            return failure(state, error)

        case types.ROUTINES_PUT_REQUEST:
            return request(state)

        case types.ROUTINES_PUT_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entities: updateItem(state.entities, payload)
            }

        case types.ROUTINES_PUT_FAILURE:
            return failure(state, error)

        case types.ROUTINES_DELETE_REQUEST:
            return request(state)

        case types.ROUTINES_DELETE_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entities: deleteItem(state.entities, meta.id)
            }

        case types.ROUTINES_DELETE_FAILURE:
            return failure(state, error)

        default:
            return state
    }
}

export default routines
