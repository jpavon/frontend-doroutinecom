import { IApiSuccess, IApiFailure } from 'data/types'
import { IWorkoutData, IWorkoutFromData } from 'data/workouts/types'

import * as constants from 'data/workouts/constants'

// get
export const getWorkouts = () => ({
    type: constants.WORKOUTS_GET_REQUEST,
    method: 'get',
    endpoint: 'workouts'
})

export const getWorkoutsSuccess = (payload: IApiSuccess) => ({
    type: constants.WORKOUTS_GET_SUCCESS,
    payload
})

export const getWorkoutsFailure = (payload: IApiFailure) => ({
    type: constants.WORKOUTS_GET_FAILURE,
    error: payload
})

// post
export const postWorkout = (data: IWorkoutData) => ({
    type: constants.WORKOUTS_POST_REQUEST,
    method: 'post',
    endpoint: 'workouts',
    data,
})

export const postWorkoutSuccess = (payload: IApiSuccess) => ({
    type: constants.WORKOUTS_POST_SUCCESS,
    payload
})

export const postWorkoutFailure = (payload: IApiFailure) => ({
    type: constants.WORKOUTS_POST_FAILURE,
    error: payload
})

// postFrom
export const postWorkoutFrom = (data: IWorkoutFromData) => ({
    type: constants.WORKOUTS_POST_FROM_REQUEST,
    method: 'post',
    endpoint: 'workouts',
    data,
})

export const postWorkoutFromSuccess = (payload: IApiSuccess) => ({
    type: constants.WORKOUTS_POST_FROM_SUCCESS,
    payload
})

export const postWorkoutFromFailure = (payload: IApiFailure) => ({
    type: constants.WORKOUTS_POST_FROM_FAILURE,
    error: payload
})

// put
export const putWorkout = (id: number, data: IWorkoutData, resolve?: () => void, reject?: () => void) => ({
    type: constants.WORKOUTS_PUT_REQUEST,
    method: 'put',
    endpoint: `workouts/${id}`,
    id,
    data,
    resolve,
    reject
})

export const putWorkoutSuccess = (payload: IApiSuccess) => ({
    type: constants.WORKOUTS_PUT_SUCCESS,
    payload
})

export const putWorkoutFailure = (payload: IApiFailure) => ({
    type: constants.WORKOUTS_PUT_FAILURE,
    error: payload
})

// delete
export const deleteWorkout = (id: number) => ({
    type: constants.WORKOUTS_DELETE_REQUEST,
    method: 'delete',
    endpoint: `workouts/${id}`,
    id
})

export const deleteWorkoutSuccess = (payload: IApiSuccess) => ({
    type: constants.WORKOUTS_DELETE_SUCCESS,
    payload
})

export const deleteWorkoutFailure = (payload: IApiFailure) => ({
    type: constants.WORKOUTS_DELETE_FAILURE,
    error: payload
})
