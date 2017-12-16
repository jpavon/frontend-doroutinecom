import * as types from 'data/routines/types'
import * as helperTypes from 'data/utils'
import {
    fetch,
    create,
    update,
    remove,
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
            return fetch(state, payload)

        case types.ROUTINES_FETCH_FAILURE:
            return failure(state, error)

        case types.ROUTINES_POST_REQUEST:
            return request(state)

        case types.ROUTINES_POST_SUCCESS:
            return create(state, payload)

        case types.ROUTINES_POST_FAILURE:
            return failure(state, error)

        case types.ROUTINES_PUT_REQUEST:
            return request(state)

        case types.ROUTINES_PUT_SUCCESS:
            return update(state, payload)

        case types.ROUTINES_PUT_FAILURE:
            return failure(state, error)

        case types.ROUTINES_DELETE_REQUEST:
            return request(state)

        case types.ROUTINES_DELETE_SUCCESS:
            return remove(state, meta.id)

        case types.ROUTINES_DELETE_FAILURE:
            return failure(state, error)

        default:
            return state
    }
}

export default routines
