import { CALL_API } from 'utils/apiMiddleware'
import * as constants from 'data/sets/constants'
import { shouldFetch } from 'data/utils'

const getSets = () => ({
    [CALL_API]: {
        types: [
            constants.SETS_FETCH_REQUEST,
            constants.SETS_FETCH_SUCCESS,
            constants.SETS_FETCH_FAILURE
        ],
        endpoint: 'sets',
        method: 'get'
    }
})

export const fetchSets = (force = false) => (dispatch, getState) => {
    return (force || shouldFetch(constants.NAME, getState())) && dispatch(getSets())
}


const postSet = (exerciseId) => ({
    [CALL_API]: {
        types: [
            constants.SETS_POST_REQUEST,
            constants.SETS_POST_SUCCESS,
            constants.SETS_POST_FAILURE
        ],
        endpoint: 'sets',
        method: 'post',
        data: {
            exerciseId
        }
    }
})

export const createSet = (exerciseId) => (dispatch, getState) => {
    return dispatch(postSet(exerciseId))
}

const putSet = (id, data) => ({
    [CALL_API]: {
        types: [
            constants.SETS_PUT_REQUEST,
            constants.SETS_PUT_SUCCESS,
            constants.SETS_PUT_FAILURE
        ],
        endpoint: `sets/${id}`,
        method: 'put',
        data,
        meta: {
            id
        }
    }
})

export const updateSet = (id, data) => (dispatch, getState) => {
    return dispatch(putSet(id, data))
}

const deleteSet = (id) => ({
    [CALL_API]: {
        types: [
            constants.SETS_DELETE_REQUEST,
            constants.SETS_DELETE_SUCCESS,
            constants.SETS_DELETE_FAILURE
        ],
        endpoint: `sets/${id}`,
        method: 'delete',
        meta: {
            id
        }
    }
})

export const removeSet = (id) => (dispatch, getState) => {
    return dispatch(deleteSet(id))
}
