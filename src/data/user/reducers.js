import * as types from 'data/user/types'
import * as helperTypes from 'data/types'
import { updateItem, insertItem, deleteItem, defaultFetch, defaultFailure, defaultMounted } from 'data/helpers'

const initialState = {
    fetchStatus: helperTypes.STATUS_NONE,
    entity: {}
}

const user = (state = initialState, action) => {
    const { type, payload, error, meta } = action

    switch (type) {
        case types.USER_FETCH_REQUEST:
            return defaultFetch(state)

        case types.USER_FETCH_SUCCESS:
            return {
                ...state,
                ...payload,
                fetchStatus: helperTypes.STATUS_LOADED,
            }

        case types.USER_FETCH_FAILURE:
            return defaultFailure(state, error)

        case types.USER_POST_REQUEST:
            return defaultFetch(state)

        case types.USER_POST_SUCCESS:
            return {
                ...state,
                ...payload,
                fetchStatus: helperTypes.STATUS_LOADED,
            }

        case types.USER_POST_FAILURE:
            return defaultFailure(state, error)

        case types.USER_PUT_REQUEST:
            return defaultFetch(state)

        case types.USER_PUT_SUCCESS:
            return {
                ...state,
                ...payload,
                fetchStatus: helperTypes.STATUS_LOADED,
            }

        case types.USER_PUT_FAILURE:
            return defaultFailure(state, error)

        case types.USER_DELETE_REQUEST:
            return defaultFetch(state)

        case types.USER_DELETE_SUCCESS:
            return {
                id: null,
                fetchStatus: helperTypes.STATUS_LOADED,
            }

        case types.USER_DELETE_FAILURE:
            return defaultFailure(state, error)

        case helperTypes.MOUNTED:
            return defaultMounted(state)

        default:
            return state
    }
}

export default user
