import { IExercisesState, IExercisesAction, IExercise } from 'data/exercises/types'

import * as constants from 'data/exercises/constants'
import * as dataTypes from 'data/constants'
import * as utils from 'data/utils'

const initialState: IExercisesState = {
    fetchStatus: dataTypes.STATUS_NONE,
    entitiesStatus: {},
    entities: [],
    error: null
}

const exercises = (state = initialState, action: IExercisesAction) => {
    const { type, payload, error, id } = action

    switch (type) {
        case constants.EXERCISES_GET_REQUEST:
            return utils.request(state)

        case constants.EXERCISES_GET_SUCCESS:
            return utils.getSuccess(state, (payload as IExercise[]))

        case constants.EXERCISES_GET_FAILURE:
            return utils.failure(state, error)

        case constants.EXERCISES_POST_REQUEST:
            return utils.request(state)

        case constants.EXERCISES_POST_SUCCESS:
            return utils.postSuccess(state, (payload as IExercise))

        case constants.EXERCISES_POST_FAILURE:
            return utils.failure(state, error)

        case constants.EXERCISES_PUT_REQUEST:
            return utils.putRequest(state, id)

        case constants.EXERCISES_PUT_SUCCESS:
            return utils.putSuccess(state, (payload as IExercise))

        case constants.EXERCISES_PUT_FAILURE:
            return utils.failure(state, error)

        case constants.EXERCISES_DELETE_REQUEST:
            return utils.deleteRequest(state, id)

        case constants.EXERCISES_DELETE_SUCCESS:
            return utils.deleteSuccess(state, (payload as IExercise).id)

        case constants.EXERCISES_DELETE_FAILURE:
            return utils.failure(state, error)

        default:
            return state
    }
}

export default exercises
