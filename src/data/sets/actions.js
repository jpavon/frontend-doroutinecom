import debounce from 'lodash/debounce'

import { CALL_API } from 'middleware/api'
import * as types from 'data/sets/types'

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

const shouldFetchSets = (state) => state.sets.entities.length === 0

export const fetchSets = () => (dispatch, getState) => {
    return shouldFetchSets(getState()) && dispatch(getSets())
}


const postSet = (exerciseId) => ({
    [CALL_API]: {
        types: [
            types.SET_POST_REQUEST,
            types.SET_POST_SUCCESS,
            types.SET_POST_FAILURE
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
            types.SET_PUT_REQUEST,
            types.SET_PUT_SUCCESS,
            types.SET_PUT_FAILURE
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
            types.SET_DELETE_REQUEST,
            types.SET_DELETE_SUCCESS,
            types.SET_DELETE_FAILURE
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
