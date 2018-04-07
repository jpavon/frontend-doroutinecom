import { IRoutinesState, IRoutinesAction } from 'data/routines/types'

import constants from 'data/routines/constants'
import { statusConstants } from 'data/constants'
import * as utils from 'data/utils'

const initialState: Readonly<IRoutinesState> = {
    fetchStatus: statusConstants.STATUS_NONE,
    entitiesStatus: {},
    entities: [],
    error: null
}

const routines = (state = initialState, action: IRoutinesAction): IRoutinesState => {
    switch (action.type) {
        case constants.ROUTINES_GET_REQUEST:
            return utils.request(state)

        case constants.ROUTINES_GET_SUCCESS:
            return utils.getSuccess(state, action.payload)

        case constants.ROUTINES_GET_FAILURE:
            return utils.failure(state, action.error)

        case constants.ROUTINES_POST_REQUEST:
            return utils.request(state)

        case constants.ROUTINES_POST_SUCCESS:
            return utils.postSuccess(state, action.payload)

        case constants.ROUTINES_POST_FAILURE:
            return utils.failure(state, action.error)

        case constants.ROUTINES_PUT_REQUEST:
            return utils.putRequest(state, action.id)

        case constants.ROUTINES_PUT_SUCCESS:
            return utils.putSuccess(state, action.payload)

        case constants.ROUTINES_PUT_FAILURE:
            return utils.failure(state, action.error)

        case constants.ROUTINES_DELETE_REQUEST:
            return utils.deleteRequest(state, action.id)

        case constants.ROUTINES_DELETE_SUCCESS:
            return utils.deleteSuccess(state, action.payload.id)

        case constants.ROUTINES_DELETE_FAILURE:
            return utils.failure(state, action.error)

        default:
            return state
    }
}

export default routines
