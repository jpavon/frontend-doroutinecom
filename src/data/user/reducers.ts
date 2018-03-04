import * as store from 'store'

import { IUserState, IUserAction } from 'data/user/types'

import * as constants from 'data/user/constants'
import * as dataConstants from 'data/constants'

const initialState: IUserState = {
    fetchStatus: dataConstants.STATUS_NONE,
    isAuth: !!store.get('token'),
    entity: null,
    error: null
}

const user = (state = initialState, action: IUserAction): IUserState => {
    const { type, payload, error } = action

    switch (type) {
        case constants.USER_GET_REQUEST:
            return {
                ...state,
                fetchStatus: dataConstants.STATUS_LOADING
            }

        case constants.USER_GET_SUCCESS:
            return {
                ...state,
                fetchStatus: dataConstants.STATUS_LOADED,
                entity: {
                    ...state.entity,
                    ...payload
                }
            }

        case constants.USER_GET_FAILURE:
            return {
                ...state,
                fetchStatus: dataConstants.STATUS_FAILED,
                error
            }

        case constants.USER_PUT_REQUEST:
            return {
                ...state,
                fetchStatus: dataConstants.STATUS_LOADING
            }

        case constants.USER_PUT_SUCCESS:
            return {
                ...state,
                fetchStatus: dataConstants.STATUS_LOADED,
                entity: {
                    ...state.entity,
                    ...payload
                }
            }

        case constants.USER_PUT_FAILURE:
            return {
                ...state,
                fetchStatus: dataConstants.STATUS_FAILED,
                error
            }

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
