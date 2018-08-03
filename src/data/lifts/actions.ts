import { ApiFailure } from 'data/types'
import { Lift, LiftRequestData } from 'data/lifts/types'

import action from 'utils/action'
import constants from 'data/lifts/constants'

// get
export const getLifts = () =>
    action(constants.LIFTS_GET_REQUEST, {
        method: 'get',
        endpoint: 'lifts'
    })

export const getLiftsSuccess = (payload: Lift[]) =>
    action(constants.LIFTS_GET_SUCCESS, {
        payload
    })

export const getLiftsFailure = (payload: ApiFailure) =>
    action(constants.LIFTS_GET_FAILURE, {
        error: payload
    })

// post
export const postLift = (data?: LiftRequestData) =>
    action(constants.LIFTS_POST_REQUEST, {
        method: 'post',
        endpoint: 'lifts',
        data
    })

export const postLiftSuccess = (payload: Lift) =>
    action(constants.LIFTS_POST_SUCCESS, {
        payload
    })

export const postLiftFailure = (payload: ApiFailure) =>
    action(constants.LIFTS_POST_FAILURE, {
        error: payload
    })

// put
export const putLift = (
    id: number,
    data: LiftRequestData,
    resolve?: () => void,
    reject?: () => void
) =>
    action(constants.LIFTS_PUT_REQUEST, {
        method: 'put',
        endpoint: `lifts/${id}`,
        id,
        data,
        resolve,
        reject
    })

export const putLiftSuccess = (payload: Lift) =>
    action(constants.LIFTS_PUT_SUCCESS, {
        payload
    })

export const putLiftFailure = (payload: ApiFailure) =>
    action(constants.LIFTS_PUT_FAILURE, {
        error: payload
    })

// delete
export const deleteLift = (id: number) =>
    action(constants.LIFTS_DELETE_REQUEST, {
        method: 'delete',
        endpoint: `lifts/${id}`,
        id
    })

export const deleteLiftSuccess = (payload: Lift) =>
    action(constants.LIFTS_DELETE_SUCCESS, {
        payload
    })

export const deleteLiftFailure = (payload: ApiFailure) =>
    action(constants.LIFTS_DELETE_FAILURE, {
        error: payload
    })
