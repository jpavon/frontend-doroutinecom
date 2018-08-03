import { SetsState, SetsAction } from 'data/sets/types'

import constants from 'data/sets/constants'
import { statusConstants } from 'data/constants'
import * as utils from 'data/utils'

const initialState: Readonly<SetsState> = {
    status: statusConstants.STATUS_NONE,
    entities: {},
    entitiesOrder: [],
    entitiesStatus: {},
    error: null
}

const sets = (state = initialState, action: SetsAction): SetsState => {
    switch (action.type) {
        case constants.SETS_GET_REQUEST:
            return utils.request(state)

        case constants.SETS_GET_SUCCESS:
            return utils.getSuccess(state, action.payload)

        case constants.SETS_GET_FAILURE:
            return utils.failure(state, action.error)

        case constants.SETS_POST_REQUEST:
            return utils.request(state)

        case constants.SETS_POST_SUCCESS:
            return utils.postSuccess(state, action.payload)

        case constants.SETS_POST_FAILURE:
            return utils.failure(state, action.error)

        case constants.SETS_PUT_REQUEST:
            return utils.putRequest(state, action.id)

        case constants.SETS_PUT_SUCCESS:
            return utils.putSuccess(state, action.payload)

        case constants.SETS_PUT_FAILURE:
            return utils.failure(state, action.error)

        case constants.SETS_DELETE_REQUEST:
            return utils.deleteRequest(state, action.id)

        case constants.SETS_DELETE_SUCCESS:
            return utils.deleteSuccess(state, action.payload.id)

        case constants.SETS_DELETE_FAILURE:
            return utils.failure(state, action.error)

        default:
            return state
    }
}

export default sets
