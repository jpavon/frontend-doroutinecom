import * as types from 'data/workouts/types'
import * as helperTypes from 'data/utils'
import {
    fetch,
    create,
    update,
    remove,
    request,
    putRequest,
    deleteRequest,
    failure
} from 'data/utils'

const initialState = {
    fetchStatus: helperTypes.STATUS_NONE,
    entitiesStatus: {},
    entities: []
}

const workouts = (state = initialState, action) => {
    const { type, payload, error, meta } = action

    switch (type) {
        case types.WORKOUTS_FETCH_REQUEST:
            return request(state)

        case types.WORKOUTS_FETCH_SUCCESS:
            return fetch(state, payload)

        case types.WORKOUTS_FETCH_FAILURE:
            return failure(state, error)

        case types.WORKOUTS_POST_REQUEST:
            return request(state)

        case types.WORKOUTS_POST_SUCCESS:
            return create(state, payload)

        case types.WORKOUTS_POST_FAILURE:
            return failure(state, error)

        case types.WORKOUTS_PUT_REQUEST:
            return putRequest(state, meta.id)

        case types.WORKOUTS_PUT_SUCCESS:
            return update(state, payload)

        case types.WORKOUTS_PUT_FAILURE:
            return failure(state, error)

        case types.WORKOUTS_DELETE_REQUEST:
            return deleteRequest(state, meta.id)

        case types.WORKOUTS_DELETE_SUCCESS:
            return remove(state, meta.id)

        case types.WORKOUTS_DELETE_FAILURE:
            return failure(state, error)

        default:
            return state
    }
}

export default workouts
