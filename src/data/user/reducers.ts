import * as store from 'store'

import { IUserState, IUserAction } from 'data/user/types'

import * as constants from 'data/user/constants'
import * as helperTypes from 'data/utils'
import { request, failure } from 'data/utils'

const initialState: IUserState = {
    fetchStatus: helperTypes.STATUS_NONE,
    isAuth: !!store.get('token'),
    entity: null
}

const user = (state = initialState, action: IUserAction): IUserState => {
    const { type, payload, error } = action

    switch (type) {
        case constants.USER_GET_REQUEST:
            return request(state)

        case constants.USER_GET_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entity: {
                    ...state.entity,
                    ...payload
                }
            }

        case constants.USER_GET_FAILURE:
            return failure(state, error)

        case constants.USER_PUT_REQUEST:
            return request(state)

        case constants.USER_PUT_SUCCESS:
            return {
                ...state,
                fetchStatus: helperTypes.STATUS_LOADED,
                entity: {
                    ...state.entity,
                    ...payload
                }
            }

        case constants.USER_PUT_FAILURE:
            return failure(state, error)

        case constants.USER_AUTH:
            return {
                ...state,
                isAuth: true
            }

        case constants.USER_UNAUTH:
            return {
                ...state,
                isAuth: false
            }

        default:
            return state
    }
}

export default user
