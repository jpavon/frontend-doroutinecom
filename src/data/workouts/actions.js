import { CALL_API } from 'utils/apiMiddleware'
import * as constants from 'data/workouts/constants'
import { shouldFetch } from 'data/utils'

const getWorkouts = () => ({
    [CALL_API]: {
        types: [
            constants.WORKOUTS_GET_REQUEST,
            constants.WORKOUTS_GET_SUCCESS,
            constants.WORKOUTS_GET_FAILURE
        ],
        endpoint: 'workouts',
        method: 'get'
    }
})

export const fetchWorkouts = (force = false) => (dispatch, getState) => {
    return (force || shouldFetch(constants.NAME, getState())) && dispatch(getWorkouts())
}


const postWorkout = (data) => ({
    [CALL_API]: {
        types: [
            constants.WORKOUTS_POST_REQUEST,
            constants.WORKOUTS_POST_SUCCESS,
            constants.WORKOUTS_POST_FAILURE
        ],
        endpoint: 'workouts',
        method: 'post',
        data
    }
})

export const createWorkout = (data) => (dispatch, getState) => {
    return dispatch(postWorkout(data))
}

const putWorkout = (id, data) => ({
    [CALL_API]: {
        types: [
            constants.WORKOUTS_PUT_REQUEST,
            constants.WORKOUTS_PUT_SUCCESS,
            constants.WORKOUTS_PUT_FAILURE
        ],
        endpoint: `workouts/${id}`,
        method: 'put',
        data,
        meta: {
            id
        }
    }
})

export const updateWorkout = (id, data) => (dispatch, getState) => {
    return dispatch(putWorkout(id, data))
}

const deleteWorkout = (id) => ({
    [CALL_API]: {
        types: [
            constants.WORKOUTS_DELETE_REQUEST,
            constants.WORKOUTS_DELETE_SUCCESS,
            constants.WORKOUTS_DELETE_FAILURE
        ],
        endpoint: `workouts/${id}`,
        method: 'delete',
        meta: {
            id
        }
    }
})

export const removeWorkout = (id) => (dispatch, getState) => {
    return dispatch(deleteWorkout(id))
}
