import { CALL_API } from 'middleware/api'
import * as Types from 'data/workouts/types'

const fetchWorkouts = () => ({
    [CALL_API]: {
        types: [
            Types.WORKOUTS_REQUEST,
            Types.WORKOUTS_SUCCESS,
            Types.WORKOUTS_FAILURE
        ],
        endpoint: 'workouts',
        method: 'get'
    }
})

const shouldLoadWorkouts = (state) => state.workouts.entities.length === 0

export const loadWorkouts = () => (dispatch, getState) => {
    return shouldLoadWorkouts(getState()) && dispatch(fetchWorkouts())
}
