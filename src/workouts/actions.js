import { CALL_API } from 'shared/middleware/api'
import * as Types from 'workouts/types'

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

export const loadWorkouts = () => (dispatch, getState) => {
    return dispatch(fetchWorkouts())
}
