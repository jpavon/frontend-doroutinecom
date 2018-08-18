import { LiftsState, LiftsAction } from 'data/lifts/types'

import constants from 'data/lifts/constants'
import { Status } from 'data/types'
import * as utils from 'data/utils'

const initialState: Readonly<LiftsState> = {
    status: Status.STATUS_NONE,
    entities: {},
    entitiesOrder: [],
    entitiesStatus: {},
    error: null
}

const lifts = (state = initialState, action: LiftsAction): LiftsState => {
    switch (action.type) {
        case constants.LIFTS_GET_REQUEST:
            return utils.request(state)

        case constants.LIFTS_GET_SUCCESS:
            return utils.getSuccess(state, action.payload)

        case constants.LIFTS_GET_FAILURE:
            return utils.failure(state, action.error)

        case constants.LIFTS_POST_REQUEST:
            return utils.request(state)

        case constants.LIFTS_POST_SUCCESS:
            return utils.postSuccess(state, action.payload)

        case constants.LIFTS_POST_FAILURE:
            return utils.failure(state, action.error)

        case constants.LIFTS_PUT_REQUEST:
            return utils.putRequest(state, action.id)

        case constants.LIFTS_PUT_SUCCESS:
            return utils.putSuccess(state, action.payload)

        case constants.LIFTS_PUT_FAILURE:
            return utils.failure(state, action.error)

        case constants.LIFTS_DELETE_REQUEST:
            return utils.deleteRequest(state, action.id)

        case constants.LIFTS_DELETE_SUCCESS:
            return utils.deleteSuccess(state, action.payload.id)

        case constants.LIFTS_DELETE_FAILURE:
            return utils.failure(state, action.error)

        default:
            return state
    }
}

export default lifts
