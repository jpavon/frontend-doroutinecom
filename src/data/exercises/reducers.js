import * as types from 'data/exercises/types'
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
        case types.EXERCISES_FETCH_REQUEST:
            return request(state)

        case types.EXERCISES_FETCH_SUCCESS:
            return fetch(state, payload)

        case types.EXERCISES_FETCH_FAILURE:
            return failure(state, error)

        case types.EXERCISES_POST_REQUEST:
            return request(state)

        case types.EXERCISES_POST_SUCCESS:
            return create(state, payload)

        case types.EXERCISES_POST_FAILURE:
            return failure(state, error)

        case types.EXERCISES_PUT_REQUEST:
            return putRequest(state, meta.id)

        case types.EXERCISES_PUT_SUCCESS:
            return update(state, payload)

        case types.EXERCISES_PUT_FAILURE:
            return failure(state, error)

        case types.EXERCISES_DELETE_REQUEST:
            return deleteRequest(state, meta.id)

        case types.EXERCISES_DELETE_SUCCESS:
            return remove(state, meta.id)

        case types.EXERCISES_DELETE_FAILURE:
            return failure(state, error)

        case types.EXERCISES_ORDER:
            const ids = action.ids
            return {
                ...state,
                entities: state.entities.map((entity) => {
                    if (!ids.includes(entity.id)) {
                        return entity
                    }
                    return {
                        ...entity,
                        order: ids.indexOf(entity.id)
                    }
                })
            }

        default:
            return state
    }
}

export default exercises
