import * as constants from 'data/routines/constants'
import * as dataTypes from 'data/constants'
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
    fetchStatus: dataTypes.STATUS_NONE,
    entitiesStatus: {},
    entities: []
}

const routines = (state = initialState, action) => {
    const { type, payload, error, meta } = action

    switch (type) {
        case constants.ROUTINES_GET_REQUEST:
            return request(state)

        case constants.ROUTINES_GET_SUCCESS:
            return fetch(state, payload)

        case constants.ROUTINES_GET_FAILURE:
            return failure(state, error)

        case constants.ROUTINES_POST_REQUEST:
            return request(state)

        case constants.ROUTINES_POST_SUCCESS:
            return create(state, payload)

        case constants.ROUTINES_POST_FAILURE:
            return failure(state, error)

        case constants.ROUTINES_PUT_REQUEST:
            return putRequest(state, meta.id)

        case constants.ROUTINES_PUT_SUCCESS:
            return update(state, payload)

        case constants.ROUTINES_PUT_FAILURE:
            return failure(state, error)

        case constants.ROUTINES_DELETE_REQUEST:
            return deleteRequest(state, meta.id)

        case constants.ROUTINES_DELETE_SUCCESS:
            return remove(state, meta.id)

        case constants.ROUTINES_DELETE_FAILURE:
            return failure(state, error)

        default:
            return state
    }
}

export default routines
