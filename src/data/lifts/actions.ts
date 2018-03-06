import { IApiSuccess, IApiFailure } from 'data/types'
import { ILiftRequestData } from 'data/lifts/types'

import * as constants from 'data/lifts/constants'

// get
export const getLifts = () => ({
    type: constants.LIFTS_GET_REQUEST,
    method: 'get',
    endpoint: 'sets'
})

export const getLiftsSuccess = (payload: IApiSuccess) => ({
    type: constants.LIFTS_GET_SUCCESS,
    payload
})

export const getLiftsFailure = (payload: IApiFailure) => ({
    type: constants.LIFTS_GET_FAILURE,
    error: payload
})

// post
export const postLift = (data?: ILiftRequestData) => ({
    type: constants.LIFTS_POST_REQUEST,
    method: 'post',
    endpoint: 'sets',
    data,
})

export const postLiftSuccess = (payload: IApiSuccess) => ({
    type: constants.LIFTS_POST_SUCCESS,
    payload
})

export const postLiftFailure = (payload: IApiFailure) => ({
    type: constants.LIFTS_POST_FAILURE,
    error: payload
})

// put
export const putLift = (id: number, data: ILiftRequestData, resolve?: () => void, reject?: () => void) => ({
    type: constants.LIFTS_PUT_REQUEST,
    method: 'put',
    endpoint: `sets/${id}`,
    id,
    data,
    resolve,
    reject
})

export const putLiftSuccess = (payload: IApiSuccess) => ({
    type: constants.LIFTS_PUT_SUCCESS,
    payload
})

export const putLiftFailure = (payload: IApiFailure) => ({
    type: constants.LIFTS_PUT_FAILURE,
    error: payload
})

// delete
export const deleteLift = (id: number) => ({
    type: constants.LIFTS_DELETE_REQUEST,
    method: 'delete',
    endpoint: `sets/${id}`,
    id
})

export const deleteLiftSuccess = (payload: IApiSuccess) => ({
    type: constants.LIFTS_DELETE_SUCCESS,
    payload
})

export const deleteLiftFailure = (payload: IApiFailure) => ({
    type: constants.LIFTS_DELETE_FAILURE,
    error: payload
})
