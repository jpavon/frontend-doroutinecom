import * as types from 'data/workouts/types'
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

const workouts = (state = initialState, action) => {
    const { type, payload, error, meta } = action

    switch (type) {
        case types.WORKOUTS_FETCH_REQUEST:
            return request(state)

        case types.WORKOUTS_FETCH_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entities: payload
            }

        case types.WORKOUTS_FETCH_FAILURE:
            return failure(state, error)

        case types.WORKOUTS_POST_REQUEST:
            return request(state)

        case types.WORKOUTS_POST_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entities: insertItem(state.entities, payload)
            }

        case types.WORKOUTS_POST_FAILURE:
            return failure(state, error)

        case types.WORKOUTS_PUT_REQUEST:
            return request(state)

        case types.WORKOUTS_PUT_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entities: updateItem(state.entities, payload)
            }

        case types.WORKOUTS_PUT_FAILURE:
            return failure(state, error)

        case types.WORKOUTS_DELETE_REQUEST:
            return request(state)

        case types.WORKOUTS_DELETE_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entities: deleteItem(state.entities, meta.id)
            }

        case types.WORKOUTS_DELETE_FAILURE:
            return failure(state, error)

        default:
            return state
    }
}

export default workouts
