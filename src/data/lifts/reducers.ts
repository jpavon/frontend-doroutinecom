import { ILiftsState, ILiftsAction, ILift } from 'data/lifts/types'

import * as constants from 'data/lifts/constants'
import * as dataTypes from 'data/constants'
import * as utils from 'data/utils'

const initialState: ILiftsState = {
    fetchStatus: dataTypes.STATUS_NONE,
    entitiesStatus: {},
    entities: [],
    error: null
}

const lifts = (state = initialState, action: ILiftsAction): ILiftsState => {
    const { type, payload, error, id } = action

    switch (type) {
        case constants.LIFTS_GET_REQUEST:
            return utils.request(state)

        case constants.LIFTS_GET_SUCCESS:
            return utils.getSuccess(state, (payload as ILift[]))

        case constants.LIFTS_GET_FAILURE:
            return utils.failure(state, error)

        case constants.LIFTS_POST_REQUEST:
            return utils.request(state)

        case constants.LIFTS_POST_SUCCESS:
            return utils.postSuccess(state, (payload as ILift))

        case constants.LIFTS_POST_FAILURE:
            return utils.failure(state, error)

        case constants.LIFTS_PUT_REQUEST:
            return utils.putRequest(state, id)

        case constants.LIFTS_PUT_SUCCESS:
            return utils.putSuccess(state, (payload as ILift))

        case constants.LIFTS_PUT_FAILURE:
            return utils.failure(state, error)

        case constants.LIFTS_DELETE_REQUEST:
            return utils.deleteRequest(state, id)

        case constants.LIFTS_DELETE_SUCCESS:
            return utils.deleteSuccess(state, (payload as ILift).id)

        case constants.LIFTS_DELETE_FAILURE:
            return utils.failure(state, error)

        default:
            return state
    }
}

export default lifts
