import { ApiFailure } from 'data/types'
import {
    Workout,
    WorkoutRequestData,
    WorkoutFromRequestData
} from 'data/workouts/types'

import action from 'utils/action'
import constants from 'data/workouts/constants'

// get
export const getWorkoutsRequest = () =>
    action(constants.WORKOUTS_GET_REQUEST, {
        method: 'get',
        endpoint: 'workouts'
    })

export const getWorkoutsSuccess = (payload: Workout[]) =>
    action(constants.WORKOUTS_GET_SUCCESS, {
        payload
    })

export const getWorkoutsFailure = (payload: ApiFailure) =>
    action(constants.WORKOUTS_GET_FAILURE, {
        error: payload
    })

// post
export const postWorkoutRequest = (data: WorkoutRequestData) =>
    action(constants.WORKOUTS_POST_REQUEST, {
        method: 'post',
        endpoint: 'workouts',
        data
    })

export const postWorkoutSuccess = (payload: Workout) =>
    action(constants.WORKOUTS_POST_SUCCESS, {
        payload
    })

export const postWorkoutFailure = (payload: ApiFailure) =>
    action(constants.WORKOUTS_POST_FAILURE, {
        error: payload
    })

// postFrom
export const postWorkoutFromRequest = (data: WorkoutFromRequestData) =>
    action(constants.WORKOUTS_POST_FROM_REQUEST, {
        method: 'post',
        endpoint: 'workouts',
        data
    })

export const postWorkoutFromSuccess = (payload: Workout) =>
    action(constants.WORKOUTS_POST_FROM_SUCCESS, {
        payload
    })

export const postWorkoutFromFailure = (payload: ApiFailure) =>
    action(constants.WORKOUTS_POST_FROM_FAILURE, {
        error: payload
    })

// put
export const putWorkoutRequest = (
    id: number,
    data: WorkoutRequestData,
    resolve?: () => void,
    reject?: () => void
) =>
    action(constants.WORKOUTS_PUT_REQUEST, {
        method: 'put',
        endpoint: `workouts/${id}`,
        id,
        data,
        resolve,
        reject
    })

export const putWorkoutSuccess = (payload: Workout) =>
    action(constants.WORKOUTS_PUT_SUCCESS, {
        payload
    })

export const putWorkoutFailure = (payload: ApiFailure) =>
    action(constants.WORKOUTS_PUT_FAILURE, {
        error: payload
    })

// delete
export const deleteWorkoutRequest = (id: number) =>
    action(constants.WORKOUTS_DELETE_REQUEST, {
        method: 'delete',
        endpoint: `workouts/${id}`,
        id
    })

export const deleteWorkoutSuccess = (payload: Workout) =>
    action(constants.WORKOUTS_DELETE_SUCCESS, {
        payload
    })

export const deleteWorkoutFailure = (payload: ApiFailure) =>
    action(constants.WORKOUTS_DELETE_FAILURE, {
        error: payload
    })
