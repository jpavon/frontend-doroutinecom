import { IApiFailure } from 'data/types'
import { IRoutine, IRoutineRequestData } from 'data/routines/types'

import action from 'utils/action'
import constants from 'data/routines/constants'

// get
export const getRoutines = () =>
    action(constants.ROUTINES_GET_REQUEST, {
        method: 'get',
        endpoint: 'routines'
    })

export const getRoutinesSuccess = (payload: IRoutine[]) =>
    action(constants.ROUTINES_GET_SUCCESS, {
        payload
    })

export const getRoutinesFailure = (payload: IApiFailure) =>
    action(constants.ROUTINES_GET_FAILURE, {
        error: payload
    })

// post
export const postRoutine = (data?: IRoutineRequestData) =>
    action(constants.ROUTINES_POST_REQUEST, {
        method: 'post',
        endpoint: 'routines',
        data
    })

export const postRoutineSuccess = (payload: IRoutine) =>
    action(constants.ROUTINES_POST_SUCCESS, {
        payload
    })

export const postRoutineFailure = (payload: IApiFailure) =>
    action(constants.ROUTINES_POST_FAILURE, {
        error: payload
    })

// put
export const putRoutine = (
    id: number,
    data: IRoutineRequestData,
    resolve?: () => void,
    reject?: () => void
) =>
    action(constants.ROUTINES_PUT_REQUEST, {
        method: 'put',
        endpoint: `routines/${id}`,
        id,
        data,
        resolve,
        reject
    })

export const putRoutineSuccess = (payload: IRoutine) =>
    action(constants.ROUTINES_PUT_SUCCESS, {
        payload
    })

export const putRoutineFailure = (payload: IApiFailure) =>
    action(constants.ROUTINES_PUT_FAILURE, {
        error: payload
    })

// delete
export const deleteRoutine = (id: number) =>
    action(constants.ROUTINES_DELETE_REQUEST, {
        method: 'delete',
        endpoint: `routines/${id}`,
        id
    })

export const deleteRoutineSuccess = (payload: IRoutine) =>
    action(constants.ROUTINES_DELETE_SUCCESS, {
        payload
    })

export const deleteRoutineFailure = (payload: IApiFailure) =>
    action(constants.ROUTINES_DELETE_FAILURE, {
        error: payload
    })
