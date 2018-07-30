import { IApiFailure } from 'data/types'
import { ILift, ILiftRequestData } from 'data/lifts/types'

import action from 'utils/action'
import constants from 'data/lifts/constants'

// get
export const getLifts = () =>
    action(constants.LIFTS_GET_REQUEST, {
        method: 'get',
        endpoint: 'lifts'
    })

export const getLiftsSuccess = (payload: ILift[]) =>
    action(constants.LIFTS_GET_SUCCESS, {
        payload
    })

export const getLiftsFailure = (payload: IApiFailure) =>
    action(constants.LIFTS_GET_FAILURE, {
        error: payload
    })

// post
export const postLift = (data?: ILiftRequestData) =>
    action(constants.LIFTS_POST_REQUEST, {
        method: 'post',
        endpoint: 'lifts',
        data
    })

export const postLiftSuccess = (payload: ILift) =>
    action(constants.LIFTS_POST_SUCCESS, {
        payload
    })

export const postLiftFailure = (payload: IApiFailure) =>
    action(constants.LIFTS_POST_FAILURE, {
        error: payload
    })

// put
export const putLift = (
    id: number,
    data: ILiftRequestData,
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

export const putLiftSuccess = (payload: ILift) =>
    action(constants.LIFTS_PUT_SUCCESS, {
        payload
    })

export const putLiftFailure = (payload: IApiFailure) =>
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

export const deleteLiftSuccess = (payload: ILift) =>
    action(constants.LIFTS_DELETE_SUCCESS, {
        payload
    })

export const deleteLiftFailure = (payload: IApiFailure) =>
    action(constants.LIFTS_DELETE_FAILURE, {
        error: payload
    })
