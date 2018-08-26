import { ApiFailure } from 'data/types'
import { Exercise, ExerciseRequestData } from 'data/exercises/types'

import action from 'utils/action'
import constants from 'data/exercises/constants'

// get
export const getExercisesRequest = () =>
    action(constants.EXERCISES_GET_REQUEST, {
        method: 'get',
        endpoint: 'exercises'
    })

export const getExercisesSuccess = (payload: Exercise[]) =>
    action(constants.EXERCISES_GET_SUCCESS, {
        payload
    })

export const getExercisesFailure = (payload: ApiFailure) =>
    action(constants.EXERCISES_GET_FAILURE, {
        error: payload
    })

// post
export const postExerciseRequest = (data?: ExerciseRequestData) =>
    action(constants.EXERCISES_POST_REQUEST, {
        method: 'post',
        endpoint: 'exercises',
        data
    })

export const postExerciseSuccess = (payload: Exercise) =>
    action(constants.EXERCISES_POST_SUCCESS, {
        payload
    })

export const postExerciseFailure = (payload: ApiFailure) =>
    action(constants.EXERCISES_POST_FAILURE, {
        error: payload
    })

// put
export const putExerciseRequest = (
    id: number,
    data: ExerciseRequestData,
    resolve?: () => void,
    reject?: () => void
) =>
    action(constants.EXERCISES_PUT_REQUEST, {
        method: 'put',
        endpoint: `exercises/${id}`,
        id,
        data,
        resolve,
        reject
    })

export const putExerciseSuccess = (payload: Exercise) =>
    action(constants.EXERCISES_PUT_SUCCESS, {
        payload
    })

export const putExerciseFailure = (payload: ApiFailure) =>
    action(constants.EXERCISES_PUT_FAILURE, {
        error: payload
    })

// delete
export const deleteExerciseRequest = (id: number) =>
    action(constants.EXERCISES_DELETE_REQUEST, {
        method: 'delete',
        endpoint: `exercises/${id}`,
        id
    })

export const deleteExerciseSuccess = (payload: Exercise) =>
    action(constants.EXERCISES_DELETE_SUCCESS, {
        payload
    })

export const deleteExerciseFailure = (payload: ApiFailure) =>
    action(constants.EXERCISES_DELETE_FAILURE, {
        error: payload
    })
