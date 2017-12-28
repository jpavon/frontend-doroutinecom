import { CALL_API } from 'utils/apiMiddleware'
import * as types from 'data/routines/types'
import { shouldFetch } from 'data/utils'
import debounceUpdate from 'utils/debounceUpdate'

const getRoutines = () => ({
    [CALL_API]: {
        types: [
            types.ROUTINES_FETCH_REQUEST,
            types.ROUTINES_FETCH_SUCCESS,
            types.ROUTINES_FETCH_FAILURE
        ],
        endpoint: 'routines',
        method: 'get'
    }
})

export const fetchRoutines = (force = false) => (dispatch, getState) => {
    return (force || shouldFetch(types.NAME, getState())) && dispatch(getRoutines())
}


const postRoutine = (data) => ({
    [CALL_API]: {
        types: [
            types.ROUTINES_POST_REQUEST,
            types.ROUTINES_POST_SUCCESS,
            types.ROUTINES_POST_FAILURE
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
            types.ROUTINES_PUT_REQUEST,
            types.ROUTINES_PUT_SUCCESS,
            types.ROUTINES_PUT_FAILURE
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
            types.ROUTINES_DELETE_REQUEST,
            types.ROUTINES_DELETE_SUCCESS,
            types.ROUTINES_DELETE_FAILURE
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
