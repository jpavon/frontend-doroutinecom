import { IApiFailure } from 'data/types'
import { IRoutine, IRoutineRequestData } from 'data/routines/types'

import * as constants from 'data/routines/constants'

// get
export const getRoutines = () => ({
    type: constants.ROUTINES_GET_REQUEST,
    method: 'get',
    endpoint: 'routines'
})

export const getRoutinesSuccess = (payload: IRoutine[]) => ({
    type: constants.ROUTINES_GET_SUCCESS,
    payload
})

export const getRoutinesFailure = (payload: IApiFailure) => ({
    type: constants.ROUTINES_GET_FAILURE,
    error: payload
})

// post
export const postRoutine = (data?: IRoutineRequestData) => ({
    type: constants.ROUTINES_POST_REQUEST,
    method: 'post',
    endpoint: 'routines',
    data,
})

export const postRoutineSuccess = (payload: IRoutine) => ({
    type: constants.ROUTINES_POST_SUCCESS,
    payload
})

export const postRoutineFailure = (payload: IApiFailure) => ({
    type: constants.ROUTINES_POST_FAILURE,
    error: payload
})

// put
export const putRoutine = (id: number, data: IRoutineRequestData, resolve?: () => void, reject?: () => void) => ({
    type: constants.ROUTINES_PUT_REQUEST,
    method: 'put',
    endpoint: `routines/${id}`,
    id,
    data,
    resolve,
    reject
})

export const putRoutineSuccess = (payload: IRoutine) => ({
    type: constants.ROUTINES_PUT_SUCCESS,
    payload
})

export const putRoutineFailure = (payload: IApiFailure) => ({
    type: constants.ROUTINES_PUT_FAILURE,
    error: payload
})

// delete
export const deleteRoutine = (id: number) => ({
    type: constants.ROUTINES_DELETE_REQUEST,
    method: 'delete',
    endpoint: `routines/${id}`,
    id
})

export const deleteRoutineSuccess = (payload: IRoutine) => ({
    type: constants.ROUTINES_DELETE_SUCCESS,
    payload
})

export const deleteRoutineFailure = (payload: IApiFailure) => ({
    type: constants.ROUTINES_DELETE_FAILURE,
    error: payload
})
