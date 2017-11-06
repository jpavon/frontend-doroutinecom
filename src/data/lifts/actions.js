import debounce from 'lodash/debounce'

import { CALL_API } from 'middleware/api'
import * as types from 'data/lifts/types'
import * as helperTypes from 'data/types'

const getLifts = () => ({
    [CALL_API]: {
        types: [
            types.LIFTS_FETCH_REQUEST,
            types.LIFTS_FETCH_SUCCESS,
            types.LIFTS_FETCH_FAILURE
        ],
        endpoint: 'lifts',
        method: 'get'
    }
})

const shouldFetchLifts = (state) => state.lifts.fetchStatus !== helperTypes.STATUS_LOADED

export const fetchLifts = () => (dispatch, getState) => {
    return shouldFetchLifts(getState()) && dispatch(getLifts())
}


const postLift = (exerciseId) => ({
    [CALL_API]: {
        types: [
            types.LIFTS_POST_REQUEST,
            types.LIFTS_POST_SUCCESS,
            types.LIFTS_POST_FAILURE
        ],
        endpoint: 'lifts',
        method: 'post',
        data: {
            exerciseId
        }
    }
})

export const createLift = (exerciseId) => (dispatch, getState) => {
    return dispatch(postLift(exerciseId))
}

const putLift = (id, data) => ({
    [CALL_API]: {
        types: [
            types.LIFTS_PUT_REQUEST,
            types.LIFTS_PUT_SUCCESS,
            types.LIFTS_PUT_FAILURE
        ],
        endpoint: `lifts/${id}`,
        method: 'put',
        data,
        meta: {
            id
        }
    }
})

const updateLiftAction = (dispatch, id, data, resolve, reject ) => (
    dispatch(putLift(id, data)).then(resolve).catch(reject)
)

const debounceUpdateLift = debounce(updateLiftAction, 300)

export const updateLift = (id, data) => (dispatch, getState) => {
    return new Promise(debounceUpdateLift.bind(null, dispatch, id, data))
}

const deleteLift = (id) => ({
    [CALL_API]: {
        types: [
            types.LIFTS_DELETE_REQUEST,
            types.LIFTS_DELETE_SUCCESS,
            types.LIFTS_DELETE_FAILURE
        ],
        endpoint: `lifts/${id}`,
        method: 'delete',
        meta: {
            id
        }
    }
})

export const removeLift = (id) => (dispatch, getState) => {
    return dispatch(deleteLift(id))
}
