import debounce from 'lodash/debounce'

import { CALL_API } from 'middleware/api'
import * as types from 'data/workouts/types'
import * as helperTypes from 'data/types'

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

const shouldFetchWorkouts = (state) => state.workouts.fetchStatus !== helperTypes.STATUS_LOADED

export const fetchWorkouts = () => (dispatch, getState) => {
    return shouldFetchWorkouts(getState()) && dispatch(getWorkouts())
}


const postWorkout = () => ({
    [CALL_API]: {
        types: [
            types.WORKOUTS_POST_REQUEST,
            types.WORKOUTS_POST_SUCCESS,
            types.WORKOUTS_POST_FAILURE
        ],
        endpoint: 'workouts',
        method: 'post'
    }
})

export const createWorkout = () => (dispatch, getState) => {
    return dispatch(postWorkout())
}

const putWorkout = (id, data) => ({
    [CALL_API]: {
        types: [
            types.WORKOUTS_PUT_REQUEST,
            types.WORKOUTS_PUT_SUCCESS,
            types.WORKOUTS_PUT_FAILURE
        ],
        endpoint: `workouts/${id}`,
        method: 'put',
        data,
        meta: {
            id
        }
    }
})

const updateWorkoutAction = (dispatch, id, data, resolve, reject ) => (
    dispatch(putWorkout(id, data)).then(resolve).catch(reject)
)

const debounceUpdateWorkout = debounce(updateWorkoutAction, 300)

export const updateWorkout = (id, data) => (dispatch, getState) => {
    return new Promise(debounceUpdateWorkout.bind(null, dispatch, id, data))
}

const deleteWorkout = (id) => ({
    [CALL_API]: {
        types: [
            types.WORKOUTS_DELETE_REQUEST,
            types.WORKOUTS_DELETE_SUCCESS,
            types.WORKOUTS_DELETE_FAILURE
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
