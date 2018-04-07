import { IApiFailure } from 'data/types'
import { IRoutine, IRoutineRequestData } from 'data/routines/types'

import constants from 'data/routines/constants'

const createAction = <T extends { type: constants }>(d: T): T => d

// get
export const getRoutines = () => createAction({
    type: constants.ROUTINES_GET_REQUEST,
    method: 'get',
    endpoint: 'routines'
})

export const getRoutinesSuccess = (payload: IRoutine[]) => createAction({
    type: constants.ROUTINES_GET_SUCCESS,
    payload
})

export const getRoutinesFailure = (payload: IApiFailure) => createAction({
    type: constants.ROUTINES_GET_FAILURE,
    error: payload
})

// post
export const postRoutine = (data?: IRoutineRequestData) => createAction({
    type: constants.ROUTINES_POST_REQUEST,
    method: 'post',
    endpoint: 'routines',
    data,
})

export const postRoutineSuccess = (payload: IRoutine) => createAction({
    type: constants.ROUTINES_POST_SUCCESS,
    payload
})

export const postRoutineFailure = (payload: IApiFailure) => createAction({
    type: constants.ROUTINES_POST_FAILURE,
    error: payload
})

// put
export const putRoutine = (id: number, data: IRoutineRequestData, resolve?: () => void, reject?: () => void) =>
createAction({
    type: constants.ROUTINES_PUT_REQUEST,
    method: 'put',
    endpoint: `routines/${id}`,
    id,
    data,
    resolve,
    reject
})

export const putRoutineSuccess = (payload: IRoutine) => createAction({
    type: constants.ROUTINES_PUT_SUCCESS,
    payload
})

export const putRoutineFailure = (payload: IApiFailure) => createAction({
    type: constants.ROUTINES_PUT_FAILURE,
    error: payload
})

// delete
export const deleteRoutine = (id: number) => createAction({
    type: constants.ROUTINES_DELETE_REQUEST,
    method: 'delete',
    endpoint: `routines/${id}`,
    id
})

export const deleteRoutineSuccess = (payload: IRoutine) => createAction({
    type: constants.ROUTINES_DELETE_SUCCESS,
    payload
})

export const deleteRoutineFailure = (payload: IApiFailure) => createAction({
    type: constants.ROUTINES_DELETE_FAILURE,
    error: payload
})
