import * as constants from 'data/sets/constants'
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

const exercises = (state = initialState, action) => {
    const { type, payload, error, meta } = action

    switch (type) {
        case constants.SETS_GET_REQUEST:
            return request(state)

        case constants.SETS_GET_SUCCESS:
            return fetch(state, payload)

        case constants.SETS_GET_FAILURE:
            return failure(state, error)

        case constants.SETS_POST_REQUEST:
            return request(state)

        case constants.SETS_POST_SUCCESS:
            return create(state, payload)

        case constants.SETS_POST_FAILURE:
            return failure(state, error)

        case constants.SETS_PUT_REQUEST:
            return putRequest(state, meta.id)

        case constants.SETS_PUT_SUCCESS:
            return update(state, payload)

        case constants.SETS_PUT_FAILURE:
            return failure(state, error)

        case constants.SETS_DELETE_REQUEST:
            return deleteRequest(state, meta.id)

        case constants.SETS_DELETE_SUCCESS:
            return remove(state, meta.id)

        case constants.SETS_DELETE_FAILURE:
            return failure(state, error)

        default:
            return state
    }
}

export default exercises
