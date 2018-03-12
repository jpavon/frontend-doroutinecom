import { IWorkoutsState, IWorkoutsAction, IWorkout } from 'data/workouts/types'

import * as constants from 'data/workouts/constants'
import * as dataTypes from 'data/constants'
import * as utils from 'data/utils'

const initialState: IWorkoutsState = {
    fetchStatus: dataTypes.STATUS_NONE,
    entitiesStatus: {},
    entities: [],
    error: null
}

const workouts = (state = initialState, action: IWorkoutsAction): IWorkoutsState => {
    const { type, payload, error, id } = action

    switch (type) {
        case constants.WORKOUTS_GET_REQUEST:
            return utils.request(state)

        case constants.WORKOUTS_GET_SUCCESS:
            return utils.getSuccess(state, (payload as IWorkout[]))

        case constants.WORKOUTS_GET_FAILURE:
            return utils.failure(state, error)

        case constants.WORKOUTS_POST_REQUEST:
        case constants.WORKOUTS_POST_FROM_REQUEST:
            return utils.request(state)

        case constants.WORKOUTS_POST_SUCCESS:
        case constants.WORKOUTS_POST_FROM_SUCCESS:
            return utils.postSuccess(state, (payload as IWorkout))

        case constants.WORKOUTS_POST_FAILURE:
        case constants.WORKOUTS_POST_FROM_FAILURE:
            return utils.failure(state, error)

        case constants.WORKOUTS_PUT_REQUEST:
            return utils.putRequest(state, id)

        case constants.WORKOUTS_PUT_SUCCESS:
            return utils.putSuccess(state, (payload as IWorkout))

        case constants.WORKOUTS_PUT_FAILURE:
            return utils.failure(state, error)

        case constants.WORKOUTS_DELETE_REQUEST:
            return utils.deleteRequest(state, id)

        case constants.WORKOUTS_DELETE_SUCCESS:
            return utils.deleteSuccess(state, (payload as IWorkout).id)

        case constants.WORKOUTS_DELETE_FAILURE:
            return utils.failure(state, error)

        default:
            return state
    }
}

export default workouts
