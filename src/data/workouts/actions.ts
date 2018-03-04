import { IApiSuccess, IApiFailure } from 'data/types'
import { IWorkoutData } from 'data/workouts/types'

import * as constants from 'data/workouts/constants'

// get
export const getWorkouts = () => ({
    type: constants.WORKOUTS_GET_REQUEST,
    method: 'get',
    endpoint: 'user'
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
    endpoint: 'user',
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

// put
export const putWorkout = (id: number, data: IWorkoutData, resolve?: () => void, reject?: () => void) => ({
    type: constants.WORKOUTS_PUT_REQUEST,
    method: 'put',
    endpoint: 'user',
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

// put
export const deleteWorkout = (id: number) => ({
    type: constants.WORKOUTS_DELETE_REQUEST,
    method: 'delete',
    endpoint: 'user',
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
