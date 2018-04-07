import { IApiFailure } from 'data/types'
import { ISet, ISetRequestData } from 'data/sets/types'

import constants from 'data/sets/constants'

const createAction = <T extends { type: constants }>(d: T): T => d

// get
export const getSets = () => createAction({
    type: constants.SETS_GET_REQUEST,
    method: 'get',
    endpoint: 'sets'
})

export const getSetsSuccess = (payload: ISet[]) => createAction({
    type: constants.SETS_GET_SUCCESS,
    payload
})

export const getSetsFailure = (payload: IApiFailure) => createAction({
    type: constants.SETS_GET_FAILURE,
    error: payload
})

// post
export const postSet = (data: ISetRequestData) => createAction({
    type: constants.SETS_POST_REQUEST,
    method: 'post',
    endpoint: 'sets',
    data,
})

export const postSetSuccess = (payload: ISet) => createAction({
    type: constants.SETS_POST_SUCCESS,
    payload
})

export const postSetFailure = (payload: IApiFailure) => createAction({
    type: constants.SETS_POST_FAILURE,
    error: payload
})

// put
export const putSet = (id: number, data: ISetRequestData, resolve?: () => void, reject?: () => void) => createAction({
    type: constants.SETS_PUT_REQUEST,
    method: 'put',
    endpoint: `sets/${id}`,
    id,
    data,
    resolve,
    reject
})

export const putSetSuccess = (payload: ISet) => createAction({
    type: constants.SETS_PUT_SUCCESS,
    payload
})

export const putSetFailure = (payload: IApiFailure) => createAction({
    type: constants.SETS_PUT_FAILURE,
    error: payload
})

// delete
export const deleteSet = (id: number) => createAction({
    type: constants.SETS_DELETE_REQUEST,
    method: 'delete',
    endpoint: `sets/${id}`,
    id
})

export const deleteSetSuccess = (payload: ISet) => createAction({
    type: constants.SETS_DELETE_SUCCESS,
    payload
})

export const deleteSetFailure = (payload: IApiFailure) => createAction({
    type: constants.SETS_DELETE_FAILURE,
    error: payload
})
