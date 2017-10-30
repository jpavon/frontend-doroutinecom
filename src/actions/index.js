import { CALL_API } from 'middleware/api'

export const WORKOUTS_REQUEST = 'WORKOUTS_REQUEST'
export const WORKOUTS_SUCCESS = 'WORKOUTS_SUCCESS'
export const WORKOUTS_FAILURE = 'WORKOUTS_FAILURE'

const fetchWorkouts = () => ({
    [CALL_API]: {
        types: [ WORKOUTS_REQUEST, WORKOUTS_SUCCESS, WORKOUTS_FAILURE ],
        endpoint: 'workouts',
        method: 'get'
    }
})

export const loadWorkouts = () => (dispatch, getState) => {
    return dispatch(fetchWorkouts())
}
