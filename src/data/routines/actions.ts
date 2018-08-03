import { ApiFailure } from 'data/types'
import { Routine, RoutineRequestData } from 'data/routines/types'

import action from 'utils/action'
import constants from 'data/routines/constants'

// get
export const getRoutines = () =>
    action(constants.ROUTINES_GET_REQUEST, {
        method: 'get',
        endpoint: 'routines'
    })

export const getRoutinesSuccess = (payload: Routine[]) =>
    action(constants.ROUTINES_GET_SUCCESS, {
        payload
    })

export const getRoutinesFailure = (payload: ApiFailure) =>
    action(constants.ROUTINES_GET_FAILURE, {
        error: payload
    })

// post
export const postRoutine = (data?: RoutineRequestData) =>
    action(constants.ROUTINES_POST_REQUEST, {
        method: 'post',
        endpoint: 'routines',
        data
    })

export const postRoutineSuccess = (payload: Routine) =>
    action(constants.ROUTINES_POST_SUCCESS, {
        payload
    })

export const postRoutineFailure = (payload: ApiFailure) =>
    action(constants.ROUTINES_POST_FAILURE, {
        error: payload
    })

// put
export const putRoutine = (
    id: number,
    data: RoutineRequestData,
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

export const putRoutineSuccess = (payload: Routine) =>
    action(constants.ROUTINES_PUT_SUCCESS, {
        payload
    })

export const putRoutineFailure = (payload: ApiFailure) =>
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

export const deleteRoutineSuccess = (payload: Routine) =>
    action(constants.ROUTINES_DELETE_SUCCESS, {
        payload
    })

export const deleteRoutineFailure = (payload: ApiFailure) =>
    action(constants.ROUTINES_DELETE_FAILURE, {
        error: payload
    })
