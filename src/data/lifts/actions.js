import { CALL_API } from 'utils/apiMiddleware'
import * as types from 'data/lifts/types'
import { shouldFetch } from 'data/utils'
import debounceUpdate from 'utils/debounceUpdate'
import { fetchExercises } from 'data/exercises/actions'

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

export const fetchLifts = () => (dispatch, getState) => {
    return shouldFetch(types.NAME, getState()) && dispatch(getLifts())
}


const postLift = (routineId) => ({
    [CALL_API]: {
        types: [
            types.LIFTS_POST_REQUEST,
            types.LIFTS_POST_SUCCESS,
            types.LIFTS_POST_FAILURE
        ],
        endpoint: 'lifts',
        method: 'post',
        data: {
            routineId
        }
    }
})

export const createLift = (routineId) => (dispatch, getState) => {
    return dispatch(postLift(routineId))
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

export const updateLift = (id, data) => (dispatch, getState) => {
    return dispatch(putLift(id, data))
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
        .then(() => dispatch(fetchExercises(true)))
}
