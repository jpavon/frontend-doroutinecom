import { IApiFailure } from 'data/types'
import { ILift, ILiftRequestData } from 'data/lifts/types'

import constants from 'data/lifts/constants'

const createAction = <T extends { type: constants }>(d: T): T => d

// get
export const getLifts = () => createAction({
    type: constants.LIFTS_GET_REQUEST,
    method: 'get',
    endpoint: 'lifts'
})

export const getLiftsSuccess = (payload: ILift[]) => createAction({
    type: constants.LIFTS_GET_SUCCESS,
    payload
})

export const getLiftsFailure = (payload: IApiFailure) => createAction({
    type: constants.LIFTS_GET_FAILURE,
    error: payload
})

// post
export const postLift = (data?: ILiftRequestData) => createAction({
    type: constants.LIFTS_POST_REQUEST,
    method: 'post',
    endpoint: 'lifts',
    data,
})

export const postLiftSuccess = (payload: ILift) => createAction({
    type: constants.LIFTS_POST_SUCCESS,
    payload
})

export const postLiftFailure = (payload: IApiFailure) => createAction({
    type: constants.LIFTS_POST_FAILURE,
    error: payload
})

// put
export const putLift = (id: number, data: ILiftRequestData, resolve?: () => void, reject?: () => void) => createAction({
    type: constants.LIFTS_PUT_REQUEST,
    method: 'put',
    endpoint: `lifts/${id}`,
    id,
    data,
    resolve,
    reject
})

export const putLiftSuccess = (payload: ILift) => createAction({
    type: constants.LIFTS_PUT_SUCCESS,
    payload
})

export const putLiftFailure = (payload: IApiFailure) => createAction({
    type: constants.LIFTS_PUT_FAILURE,
    error: payload
})

// delete
export const deleteLift = (id: number) => createAction({
    type: constants.LIFTS_DELETE_REQUEST,
    method: 'delete',
    endpoint: `lifts/${id}`,
    id
})

export const deleteLiftSuccess = (payload: ILift) => createAction({
    type: constants.LIFTS_DELETE_SUCCESS,
    payload
})

export const deleteLiftFailure = (payload: IApiFailure) => createAction({
    type: constants.LIFTS_DELETE_FAILURE,
    error: payload
})
