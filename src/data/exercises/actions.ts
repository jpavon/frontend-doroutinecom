import { IApiFailure } from 'data/types'
import { IExercise, IExerciseRequestData } from 'data/exercises/types'

import action from 'utils/action'
import constants from 'data/exercises/constants'

// get
export const getExercises = () =>
    action(constants.EXERCISES_GET_REQUEST, {
        method: 'get',
        endpoint: 'exercises'
    })

export const getExercisesSuccess = (payload: IExercise[]) =>
    action(constants.EXERCISES_GET_SUCCESS, {
        payload
    })

export const getExercisesFailure = (payload: IApiFailure) =>
    action(constants.EXERCISES_GET_FAILURE, {
        error: payload
    })

// post
export const postExercise = (data?: IExerciseRequestData) =>
    action(constants.EXERCISES_POST_REQUEST, {
        method: 'post',
        endpoint: 'exercises',
        data
    })

export const postExerciseSuccess = (payload: IExercise) =>
    action(constants.EXERCISES_POST_SUCCESS, {
        payload
    })

export const postExerciseFailure = (payload: IApiFailure) =>
    action(constants.EXERCISES_POST_FAILURE, {
        error: payload
    })

// put
export const putExercise = (
    id: number,
    data: IExerciseRequestData,
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

export const putExerciseSuccess = (payload: IExercise) =>
    action(constants.EXERCISES_PUT_SUCCESS, {
        payload
    })

export const putExerciseFailure = (payload: IApiFailure) =>
    action(constants.EXERCISES_PUT_FAILURE, {
        error: payload
    })

// delete
export const deleteExercise = (id: number) =>
    action(constants.EXERCISES_DELETE_REQUEST, {
        method: 'delete',
        endpoint: `exercises/${id}`,
        id
    })

export const deleteExerciseSuccess = (payload: IExercise) =>
    action(constants.EXERCISES_DELETE_SUCCESS, {
        payload
    })

export const deleteExerciseFailure = (payload: IApiFailure) =>
    action(constants.EXERCISES_DELETE_FAILURE, {
        error: payload
    })
