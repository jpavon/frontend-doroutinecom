import { IRoutinesState, IRoutinesAction, IRoutine } from 'data/routines/types'

import * as constants from 'data/routines/constants'
import * as dataTypes from 'data/constants'
import * as utils from 'data/utils'

const initialState: IRoutinesState = {
    fetchStatus: dataTypes.STATUS_NONE,
    entitiesStatus: {},
    entities: [],
    error: null
}

const routines = (state = initialState, action: IRoutinesAction) => {
    const { type, payload, error, id } = action

    switch (type) {
        case constants.ROUTINES_GET_REQUEST:
            return utils.request(state)

        case constants.ROUTINES_GET_SUCCESS:
            return utils.getSuccess(state, (payload as IRoutine[]))

        case constants.ROUTINES_GET_FAILURE:
            return utils.failure(state, error)

        case constants.ROUTINES_POST_REQUEST:
            return utils.request(state)

        case constants.ROUTINES_POST_SUCCESS:
            return utils.postSuccess(state, (payload as IRoutine))

        case constants.ROUTINES_POST_FAILURE:
            return utils.failure(state, error)

        case constants.ROUTINES_PUT_REQUEST:
            return utils.putRequest(state, id)

        case constants.ROUTINES_PUT_SUCCESS:
            return utils.putSuccess(state, (payload as IRoutine))

        case constants.ROUTINES_PUT_FAILURE:
            return utils.failure(state, error)

        case constants.ROUTINES_DELETE_REQUEST:
            return utils.deleteRequest(state, id)

        case constants.ROUTINES_DELETE_SUCCESS:
            return utils.deleteSuccess(state, (payload as IRoutine).id)

        case constants.ROUTINES_DELETE_FAILURE:
            return utils.failure(state, error)

        default:
            return state
    }
}

export default routines
