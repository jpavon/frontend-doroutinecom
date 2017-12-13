import * as types from 'data/user/types'
import * as helperTypes from 'data/shared'
import { defaultRequest, defaultFailure } from 'data/shared'

const initialState = {
    fetchStatus: helperTypes.STATUS_NONE,
    entity: {},
    isAuth: !!localStorage.getItem('token')
}

const user = (state = initialState, action) => {
    const { type, payload, error } = action

    switch (type) {
        case types.USER_FETCH_REQUEST:
            return defaultRequest(state)

        case types.USER_FETCH_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entity: {
                    ...state.entity,
                    ...payload
                }
            }

        case types.USER_FETCH_FAILURE:
            return defaultFailure(state, error)

        case types.USER_POST_REQUEST:
            return defaultRequest(state)

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
            return defaultRequest(state)

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
            return defaultRequest(state)

        case types.USER_DELETE_SUCCESS:
            return {
                fetchStatus: helperTypes.STATUS_LOADED,
                entity: {
                    id: null
                }
            }

        case types.USER_DELETE_FAILURE:
            return defaultFailure(state, error)

        case types.USER_AUTH:
            return {
                ...state,
                isAuth: true
            }

        case types.USER_LOGOUT:
            return {
                ...state,
                isAuth: false
            }

        default:
            return state
    }
}

export default user
