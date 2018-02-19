import { CALL_API } from 'utils/apiMiddleware'
import * as constants from 'data/routines/constants'
import { shouldFetch } from 'data/utils'

const getRoutines = () => ({
    [CALL_API]: {
        types: [
            constants.ROUTINES_FETCH_REQUEST,
            constants.ROUTINES_FETCH_SUCCESS,
            constants.ROUTINES_FETCH_FAILURE
        ],
        endpoint: 'routines',
        method: 'get'
    }
})

export const fetchRoutines = (force = false) => (dispatch, getState) => {
    return (force || shouldFetch(constants.NAME, getState())) && dispatch(getRoutines())
}


const postRoutine = (data) => ({
    [CALL_API]: {
        types: [
            constants.ROUTINES_POST_REQUEST,
            constants.ROUTINES_POST_SUCCESS,
            constants.ROUTINES_POST_FAILURE
        ],
        endpoint: 'routines',
        method: 'post',
        data
    }
})

export const createRoutine = (data) => (dispatch, getState) => {
    return dispatch(postRoutine(data))
}

const putRoutine = (id, data) => ({
    [CALL_API]: {
        types: [
            constants.ROUTINES_PUT_REQUEST,
            constants.ROUTINES_PUT_SUCCESS,
            constants.ROUTINES_PUT_FAILURE
        ],
        endpoint: `routines/${id}`,
        method: 'put',
        data,
        meta: {
            id
        }
    }
})

export const updateRoutine = (id, data) => (dispatch, getState) => {
    return dispatch(putRoutine(id, data))
}

const deleteRoutine = (id) => ({
    [CALL_API]: {
        types: [
            constants.ROUTINES_DELETE_REQUEST,
            constants.ROUTINES_DELETE_SUCCESS,
            constants.ROUTINES_DELETE_FAILURE
        ],
        endpoint: `routines/${id}`,
        method: 'delete',
        meta: {
            id
        }
    }
})

export const removeRoutine = (id) => (dispatch, getState) => {
    return dispatch(deleteRoutine(id))
}
