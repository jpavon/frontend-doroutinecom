import debounce from 'lodash/debounce'

import { CALL_API } from 'middleware/api'
import * as types from 'data/sets/types'
import { shouldFetch } from 'data/helpers'

const getSets = () => ({
    [CALL_API]: {
        types: [
            types.SETS_FETCH_REQUEST,
            types.SETS_FETCH_SUCCESS,
            types.SETS_FETCH_FAILURE
        ],
        endpoint: 'sets',
        method: 'get'
    }
})

export const fetchSets = () => (dispatch, getState) => {
    return shouldFetch(types.NAME, getState()) && dispatch(getSets())
}


const postSet = (exerciseId) => ({
    [CALL_API]: {
        types: [
            types.SETS_POST_REQUEST,
            types.SETS_POST_SUCCESS,
            types.SETS_POST_FAILURE
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
            types.SETS_PUT_REQUEST,
            types.SETS_PUT_SUCCESS,
            types.SETS_PUT_FAILURE
        ],
        endpoint: `sets/${id}`,
        method: 'put',
        data,
        meta: {
            id
        }
    }
})

const updateSetAction = (dispatch, id, data, resolve, reject ) => (
    dispatch(putSet(id, data)).then(resolve).catch(reject)
)

const debounceUpdateSet = debounce(updateSetAction, 300)

export const updateSet = (id, data) => (dispatch, getState) => {
    return new Promise(debounceUpdateSet.bind(null, dispatch, id, data))
}

const deleteSet = (id) => ({
    [CALL_API]: {
        types: [
            types.SETS_DELETE_REQUEST,
            types.SETS_DELETE_SUCCESS,
            types.SETS_DELETE_FAILURE
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
