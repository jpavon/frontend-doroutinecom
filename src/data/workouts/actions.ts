import { IApiFailure } from 'data/types'
import {
    IWorkout,
    IWorkoutRequestData,
    IWorkoutFromRequestData
} from 'data/workouts/types'

import action from 'utils/action'
import constants from 'data/workouts/constants'

// get
export const getWorkouts = () =>
    action(constants.WORKOUTS_GET_REQUEST, {
        method: 'get',
        endpoint: 'workouts'
    })

export const getWorkoutsSuccess = (payload: IWorkout[]) =>
    action(constants.WORKOUTS_GET_SUCCESS, {
        payload
    })

export const getWorkoutsFailure = (payload: IApiFailure) =>
    action(constants.WORKOUTS_GET_FAILURE, {
        error: payload
    })

// post
export const postWorkout = (data: IWorkoutRequestData) =>
    action(constants.WORKOUTS_POST_REQUEST, {
        method: 'post',
        endpoint: 'workouts',
        data
    })

export const postWorkoutSuccess = (payload: IWorkout) =>
    action(constants.WORKOUTS_POST_SUCCESS, {
        payload
    })

export const postWorkoutFailure = (payload: IApiFailure) =>
    action(constants.WORKOUTS_POST_FAILURE, {
        error: payload
    })

// postFrom
export const postWorkoutFrom = (data: IWorkoutFromRequestData) =>
    action(constants.WORKOUTS_POST_FROM_REQUEST, {
        method: 'post',
        endpoint: 'workouts',
        data
    })

export const postWorkoutFromSuccess = (payload: IWorkout) =>
    action(constants.WORKOUTS_POST_FROM_SUCCESS, {
        payload
    })

export const postWorkoutFromFailure = (payload: IApiFailure) =>
    action(constants.WORKOUTS_POST_FROM_FAILURE, {
        error: payload
    })

// put
export const putWorkout = (
    id: number,
    data: IWorkoutRequestData,
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

export const putWorkoutSuccess = (payload: IWorkout) =>
    action(constants.WORKOUTS_PUT_SUCCESS, {
        payload
    })

export const putWorkoutFailure = (payload: IApiFailure) =>
    action(constants.WORKOUTS_PUT_FAILURE, {
        error: payload
    })

// delete
export const deleteWorkout = (id: number) =>
    action(constants.WORKOUTS_DELETE_REQUEST, {
        method: 'delete',
        endpoint: `workouts/${id}`,
        id
    })

export const deleteWorkoutSuccess = (payload: IWorkout) =>
    action(constants.WORKOUTS_DELETE_SUCCESS, {
        payload
    })

export const deleteWorkoutFailure = (payload: IApiFailure) =>
    action(constants.WORKOUTS_DELETE_FAILURE, {
        error: payload
    })
