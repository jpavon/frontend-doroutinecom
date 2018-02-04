import { CALL_API } from 'utils/apiMiddleware'
import * as types from 'data/exercises/types'
import { shouldFetch } from 'data/utils'

const getExercises = () => ({
    [CALL_API]: {
        types: [
            types.EXERCISES_FETCH_REQUEST,
            types.EXERCISES_FETCH_SUCCESS,
            types.EXERCISES_FETCH_FAILURE
        ],
        endpoint: 'exercises',
        method: 'get'
    }
})

export const fetchExercises = (force = false) => (dispatch, getState) => {
    return (force || shouldFetch(types.NAME, getState())) && dispatch(getExercises())
}


const postExercise = (data) => ({
    [CALL_API]: {
        types: [
            types.EXERCISES_POST_REQUEST,
            types.EXERCISES_POST_SUCCESS,
            types.EXERCISES_POST_FAILURE
        ],
        endpoint: 'exercises',
        method: 'post',
        data
    }
})

export const createExercise = (data) => (dispatch, getState) => {
    return dispatch(postExercise(data))
}

const putExercise = (id, data) => ({
    [CALL_API]: {
        types: [
            types.EXERCISES_PUT_REQUEST,
            types.EXERCISES_PUT_SUCCESS,
            types.EXERCISES_PUT_FAILURE
        ],
        endpoint: `exercises/${id}`,
        method: 'put',
        data,
        meta: {
            id
        }
    }
})

export const updateExercise = (id, data) => (dispatch, getState) => {
    return dispatch(putExercise(id, data))
}

const putExerciseOrder = (data) => ({
    [CALL_API]: {
        types: [
            types.EXERCISES_ORDER_PUT_REQUEST,
            types.EXERCISES_ORDER_PUT_SUCCESS,
            types.EXERCISES_ORDER_PUT_FAILURE
        ],
        endpoint: 'exercises/order',
        method: 'put',
        data
    }
})

const exercisesOrder = (ids) => ({
    type: types.EXERCISES_ORDER,
    ids
})

export const updateExerciseOrder = (data) => (dispatch, getState) => {
    dispatch(exercisesOrder(data.ids))
    return dispatch(putExerciseOrder(data))
}

const deleteExercise = (id) => ({
    [CALL_API]: {
        types: [
            types.EXERCISES_DELETE_REQUEST,
            types.EXERCISES_DELETE_SUCCESS,
            types.EXERCISES_DELETE_FAILURE
        ],
        endpoint: `exercises/${id}`,
        method: 'delete',
        meta: {
            id
        }
    }
})

export const removeExercise = (id) => (dispatch, getState) => {
    return dispatch(deleteExercise(id))
}
