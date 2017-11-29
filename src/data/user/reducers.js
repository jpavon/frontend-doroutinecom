import * as types from 'data/user/types'
import * as helperTypes from 'data/types'
import { defaultFetch, defaultFailure, defaultMounted } from 'data/helpers'

const initialState = {
    fetchStatus: helperTypes.STATUS_NONE,
    entity: {}
}

const user = (state = initialState, action) => {
    const { type, payload, error } = action

    switch (type) {
        case types.USER_FETCH_REQUEST:
        case types.USER_LOGIN_REQUEST:
        case types.USER_REGISTER_REQUEST:
            return defaultFetch(state)

        case types.USER_FETCH_SUCCESS:
        case types.USER_LOGIN_SUCCESS:
        case types.USER_REGISTER_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entity: {
                    ...state.entity,
                    ...payload
                }
            }

        case types.USER_FETCH_FAILURE:
        case types.USER_LOGIN_FAILURE:
        case types.USER_REGISTER_FAILURE:
            return defaultFailure(state, error)

        case types.USER_POST_REQUEST:
            return defaultFetch(state)

        case types.USER_POST_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entity: {
                    ...state.entity,
                    ...payload
                }
            }

        case types.USER_POST_FAILURE:
            return defaultFailure(state, error)

        case types.USER_PUT_REQUEST:
            return defaultFetch(state)

        case types.USER_PUT_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entity: {
                    ...state.entity,
                    ...payload
                }
            }

        case types.USER_PUT_FAILURE:
            return defaultFailure(state, error)

        case types.USER_DELETE_REQUEST:
        case types.USER_LOGOUT_REQUEST:
            return defaultFetch(state)

        case types.USER_DELETE_SUCCESS:
        case types.USER_LOGOUT_SUCCESS:
            return {
                fetchStatus: helperTypes.STATUS_LOADED,
                entity: {
                    id: null
                }
            }

        case types.USER_DELETE_FAILURE:
        case types.USER_LOGOUT_FAILURE:
            return defaultFailure(state, error)

        case helperTypes.MOUNTED:
            return defaultMounted(state)

        default:
            return state
    }
}

export default user
