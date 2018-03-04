import { IWorkoutsState, IWorkoutsAction, IWorkout } from 'data/workouts/types'

import * as constants from 'data/workouts/constants'
import * as dataTypes from 'data/constants'
import {
    fetch,
    create,
    update,
    remove,
    request,
    putRequest,
    deleteRequest,
    failure
} from 'data/utils'

const initialState: IWorkoutsState = {
    fetchStatus: dataTypes.STATUS_NONE,
    entitiesStatus: {},
    entities: []
}

const workouts = (state = initialState, action: IWorkoutsAction) => {
    const { type, payload, error } = action

    switch (type) {
        case constants.WORKOUTS_GET_REQUEST:
            return request(state)

        case constants.WORKOUTS_GET_SUCCESS:
            return fetch(state, (payload as IWorkout[]))

        case constants.WORKOUTS_GET_FAILURE:
            return failure(state, error)

        case constants.WORKOUTS_POST_REQUEST:
            return request(state)

        case constants.WORKOUTS_POST_SUCCESS:
            return create(state, (payload as IWorkout))

        case constants.WORKOUTS_POST_FAILURE:
            return failure(state, error)

        case constants.WORKOUTS_PUT_REQUEST:
            return putRequest(state, (payload as IWorkout).id)

        case constants.WORKOUTS_PUT_SUCCESS:
            return update(state, (payload as IWorkout))

        case constants.WORKOUTS_PUT_FAILURE:
            return failure(state, error)

        case constants.WORKOUTS_DELETE_REQUEST:
            return deleteRequest(state, (payload as IWorkout).id)

        case constants.WORKOUTS_DELETE_SUCCESS:
            return remove(state, (payload as IWorkout).id)

        case constants.WORKOUTS_DELETE_FAILURE:
            return failure(state, error)

        default:
            return state
    }
}

export default workouts
