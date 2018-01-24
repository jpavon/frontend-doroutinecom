import * as types from 'data/user/types'
import * as helperTypes from 'data/utils'
import {
    request,
    failure
} from 'data/utils'

const initialState = {
    fetchStatus: helperTypes.STATUS_NONE,
    entity: {},
    isAuth: !!localStorage.getItem('token')
}

const user = (state = initialState, action) => {
    const { type, payload, error } = action

    switch (type) {
        case types.USER_FETCH_REQUEST:
            return request(state)

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
            return failure(state, error)

        case types.USER_PUT_REQUEST:
            return request(state)

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
            return failure(state, error)

        case types.USER_AUTH:
            return {
                ...state,
                isAuth: true
            }

        case types.USER_UNAUTH:
            return {
                ...state,
                isAuth: false
            }

        default:
            return state
    }
}

export default user
