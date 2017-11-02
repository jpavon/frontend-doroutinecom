import { CALL_API } from 'middleware/api'
import * as types from 'data/workouts/types'

const getWorkouts = () => ({
    [CALL_API]: {
        types: [
            types.WORKOUTS_FETCH_REQUEST,
            types.WORKOUTS_FETCH_SUCCESS,
            types.WORKOUTS_FETCH_FAILURE
        ],
        endpoint: 'workouts',
        method: 'get'
    }
})

const shouldFetchWorkouts = (state) => state.workouts.entities.length === 0

export const fetchWorkouts = () => (dispatch, getState) => {
    return shouldFetchWorkouts(getState()) && dispatch(getWorkouts())
}


const postWorkout = (data) => ({
    [CALL_API]: {
        types: [
            types.WORKOUT_POST_REQUEST,
            types.WORKOUT_POST_SUCCESS,
            types.WORKOUT_POST_FAILURE
        ],
        endpoint: 'workouts',
        method: 'post',
        data
    }
})

export const createWorkout = (data) => (dispatch, getState) => {
    return dispatch(postWorkout(data))
}
