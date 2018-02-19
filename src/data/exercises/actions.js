import { CALL_API } from 'utils/apiMiddleware'
import * as constants from 'data/exercises/constants'
import { shouldFetch } from 'data/utils'

const getExercises = () => ({
    [CALL_API]: {
        types: [
            constants.EXERCISES_FETCH_REQUEST,
            constants.EXERCISES_FETCH_SUCCESS,
            constants.EXERCISES_FETCH_FAILURE
        ],
        endpoint: 'exercises',
        method: 'get'
    }
})

export const fetchExercises = (force = false) => (dispatch, getState) => {
    return (force || shouldFetch(constants.NAME, getState())) && dispatch(getExercises())
}


const postExercise = (data) => ({
    [CALL_API]: {
        types: [
            constants.EXERCISES_POST_REQUEST,
            constants.EXERCISES_POST_SUCCESS,
            constants.EXERCISES_POST_FAILURE
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
            constants.EXERCISES_PUT_REQUEST,
            constants.EXERCISES_PUT_SUCCESS,
            constants.EXERCISES_PUT_FAILURE
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
            constants.EXERCISES_ORDER_PUT_REQUEST,
            constants.EXERCISES_ORDER_PUT_SUCCESS,
            constants.EXERCISES_ORDER_PUT_FAILURE
        ],
        endpoint: 'exercises/order',
        method: 'put',
        data
    }
})

const exercisesOrder = (ids) => ({
    type: constants.EXERCISES_ORDER,
    ids
})

export const updateExerciseOrder = (data) => (dispatch, getState) => {
    dispatch(exercisesOrder(data.ids))
    return dispatch(putExerciseOrder(data))
}

const deleteExercise = (id) => ({
    [CALL_API]: {
        types: [
            constants.EXERCISES_DELETE_REQUEST,
            constants.EXERCISES_DELETE_SUCCESS,
            constants.EXERCISES_DELETE_FAILURE
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
