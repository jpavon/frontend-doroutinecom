import { IApiFailure } from 'data/types'
import { IExercise, IExerciseRequestData } from 'data/exercises/types'

import constants from 'data/exercises/constants'

const createAction = <T extends { type: constants }>(d: T): T => d

// get
export const getExercises = () => createAction({
    type: constants.EXERCISES_GET_REQUEST,
    method: 'get',
    endpoint: 'exercises'
})

export const getExercisesSuccess = (payload: IExercise[]) => createAction({
    type: constants.EXERCISES_GET_SUCCESS,
    payload
})

export const getExercisesFailure = (payload: IApiFailure) => createAction({
    type: constants.EXERCISES_GET_FAILURE,
    error: payload
})

// post
export const postExercise = (data?: IExerciseRequestData) => createAction({
    type: constants.EXERCISES_POST_REQUEST,
    method: 'post',
    endpoint: 'exercises',
    data,
})

export const postExerciseSuccess = (payload: IExercise) => createAction({
    type: constants.EXERCISES_POST_SUCCESS,
    payload
})

export const postExerciseFailure = (payload: IApiFailure) => createAction({
    type: constants.EXERCISES_POST_FAILURE,
    error: payload
})

// put
export const putExercise = (id: number, data: IExerciseRequestData, resolve?: () => void, reject?: () => void) =>
createAction({
    type: constants.EXERCISES_PUT_REQUEST,
    method: 'put',
    endpoint: `exercises/${id}`,
    id,
    data,
    resolve,
    reject
})

export const putExerciseSuccess = (payload: IExercise) => createAction({
    type: constants.EXERCISES_PUT_SUCCESS,
    payload
})

export const putExerciseFailure = (payload: IApiFailure) => createAction({
    type: constants.EXERCISES_PUT_FAILURE,
    error: payload
})

// delete
export const deleteExercise = (id: number) => createAction({
    type: constants.EXERCISES_DELETE_REQUEST,
    method: 'delete',
    endpoint: `exercises/${id}`,
    id
})

export const deleteExerciseSuccess = (payload: IExercise) => createAction({
    type: constants.EXERCISES_DELETE_SUCCESS,
    payload
})

export const deleteExerciseFailure = (payload: IApiFailure) => createAction({
    type: constants.EXERCISES_DELETE_FAILURE,
    error: payload
})
