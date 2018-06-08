import { IWorkoutsState, IWorkoutsAction } from 'data/workouts/types'

import constants from 'data/workouts/constants'
import { statusConstants } from 'data/constants'
import * as utils from 'data/utils'

const initialState: Readonly<IWorkoutsState> = {
    fetchStatus: statusConstants.STATUS_NONE,
    entitiesStatus: {},
    entities: [],
    error: null
}

const workouts = (
    state = initialState,
    action: IWorkoutsAction
): IWorkoutsState => {
    switch (action.type) {
        case constants.WORKOUTS_GET_REQUEST:
            return utils.request(state)

        case constants.WORKOUTS_GET_SUCCESS:
            return utils.getSuccess(state, action.payload)

        case constants.WORKOUTS_GET_FAILURE:
            return utils.failure(state, action.error)

        case constants.WORKOUTS_POST_REQUEST:
        case constants.WORKOUTS_POST_FROM_REQUEST:
            return utils.request(state)

        case constants.WORKOUTS_POST_SUCCESS:
        case constants.WORKOUTS_POST_FROM_SUCCESS:
            return utils.postSuccess(state, action.payload)

        case constants.WORKOUTS_POST_FAILURE:
        case constants.WORKOUTS_POST_FROM_FAILURE:
            return utils.failure(state, action.error)

        case constants.WORKOUTS_PUT_REQUEST:
            return utils.putRequest(state, action.id)

        case constants.WORKOUTS_PUT_SUCCESS:
            return utils.putSuccess(state, action.payload)

        case constants.WORKOUTS_PUT_FAILURE:
            return utils.failure(state, action.error)

        case constants.WORKOUTS_DELETE_REQUEST:
            return utils.deleteRequest(state, action.id)

        case constants.WORKOUTS_DELETE_SUCCESS:
            return utils.deleteSuccess(state, action.payload.id)

        case constants.WORKOUTS_DELETE_FAILURE:
            return utils.failure(state, action.error)

        default:
            return state
    }
}

export default workouts
