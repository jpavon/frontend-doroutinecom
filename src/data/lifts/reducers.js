import * as constants from 'data/lifts/constants'
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

const lifts = (state = initialState, action) => {
    const { type, payload, error, meta } = action

    switch (type) {
        case constants.LIFTS_FETCH_REQUEST:
            return request(state)

        case constants.LIFTS_FETCH_SUCCESS:
            return fetch(state, payload)

        case constants.LIFTS_FETCH_FAILURE:
            return failure(state, error)

        case constants.LIFTS_POST_REQUEST:
            return request(state)

        case constants.LIFTS_POST_SUCCESS:
            return create(state, payload)

        case constants.LIFTS_POST_FAILURE:
            return failure(state, error)

        case constants.LIFTS_PUT_REQUEST:
            return putRequest(state, meta.id)

        case constants.LIFTS_PUT_SUCCESS:
            return update(state, payload)

        case constants.LIFTS_PUT_FAILURE:
            return failure(state, error)

        case constants.LIFTS_DELETE_REQUEST:
            return deleteRequest(state, meta.id)

        case constants.LIFTS_DELETE_SUCCESS:
            return remove(state, meta.id)

        case constants.LIFTS_DELETE_FAILURE:
            return failure(state, error)

        default:
            return state
    }
}

export default lifts
