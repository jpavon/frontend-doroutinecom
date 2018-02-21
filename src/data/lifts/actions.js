import { CALL_API } from 'utils/apiMiddleware'
import * as constants from 'data/lifts/constants'
import { shouldFetch } from 'data/utils'
import { fetchExercises } from 'data/exercises/actions'

const getLifts = () => ({
    [CALL_API]: {
        types: [
            constants.LIFTS_FETCH_REQUEST,
            constants.LIFTS_FETCH_SUCCESS,
            constants.LIFTS_FETCH_FAILURE
        ],
        endpoint: 'lifts',
        method: 'get'
    }
})

export const fetchLifts = (force = false) => (dispatch, getState) => {
    return (force || shouldFetch(constants.NAME, getState())) && dispatch(getLifts())
}


const postLift = (data) => ({
    [CALL_API]: {
        types: [
            constants.LIFTS_POST_REQUEST,
            constants.LIFTS_POST_SUCCESS,
            constants.LIFTS_POST_FAILURE
        ],
        endpoint: 'lifts',
        method: 'post',
        data
    }
})

export const createLift = (data) => (dispatch, getState) => {
    return dispatch(postLift(data))
}

const putLift = (id, data) => ({
    [CALL_API]: {
        types: [
            constants.LIFTS_PUT_REQUEST,
            constants.LIFTS_PUT_SUCCESS,
            constants.LIFTS_PUT_FAILURE
        ],
        endpoint: `lifts/${id}`,
        method: 'put',
        data,
        meta: {
            id
        }
    }
})

export const updateLift = (id, data) => (dispatch, getState) => {
    return dispatch(putLift(id, data))
}

const deleteLift = (id) => ({
    [CALL_API]: {
        types: [
            constants.LIFTS_DELETE_REQUEST,
            constants.LIFTS_DELETE_SUCCESS,
            constants.LIFTS_DELETE_FAILURE
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
        .then(() => dispatch(fetchExercises(true)))
}
