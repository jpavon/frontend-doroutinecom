import { IApiFailure } from 'data/types'
import { ISet, ISetRequestData } from 'data/sets/types'

import constants from 'data/sets/constants'

// get
export const getSets = () => ({
    type: constants.SETS_GET_REQUEST as constants.SETS_GET_REQUEST,
    method: 'get',
    endpoint: 'sets'
})

export const getSetsSuccess = (payload: ISet[]) => ({
    type: constants.SETS_GET_SUCCESS as constants.SETS_GET_SUCCESS,
    payload
})

export const getSetsFailure = (payload: IApiFailure) => ({
    type: constants.SETS_GET_FAILURE as constants.SETS_GET_FAILURE,
    error: payload
})

// post
export const postSet = (data: ISetRequestData) => ({
    type: constants.SETS_POST_REQUEST as constants.SETS_POST_REQUEST,
    method: 'post',
    endpoint: 'sets',
    data
})

export const postSetSuccess = (payload: ISet) => ({
    type: constants.SETS_POST_SUCCESS as constants.SETS_POST_SUCCESS,
    payload
})

export const postSetFailure = (payload: IApiFailure) => ({
    type: constants.SETS_POST_FAILURE as constants.SETS_POST_FAILURE,
    error: payload
})

// put
export const putSet = (
    id: number,
    data: ISetRequestData,
    resolve?: () => void,
    reject?: () => void
) => ({
    type: constants.SETS_PUT_REQUEST as constants.SETS_PUT_REQUEST,
    method: 'put',
    endpoint: `sets/${id}`,
    id,
    data,
    resolve,
    reject
})

export const putSetSuccess = (payload: ISet) => ({
    type: constants.SETS_PUT_SUCCESS as constants.SETS_PUT_SUCCESS,
    payload
})

export const putSetFailure = (payload: IApiFailure) => ({
    type: constants.SETS_PUT_FAILURE as constants.SETS_PUT_FAILURE,
    error: payload
})

// delete
export const deleteSet = (id: number) => ({
    type: constants.SETS_DELETE_REQUEST as constants.SETS_DELETE_REQUEST,
    method: 'delete',
    endpoint: `sets/${id}`,
    id
})

export const deleteSetSuccess = (payload: ISet) => ({
    type: constants.SETS_DELETE_SUCCESS as constants.SETS_DELETE_SUCCESS,
    payload
})

export const deleteSetFailure = (payload: IApiFailure) => ({
    type: constants.SETS_DELETE_FAILURE as constants.SETS_DELETE_FAILURE,
    error: payload
})
