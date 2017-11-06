import debounce from 'lodash/debounce'

import { CALL_API } from 'middleware/api'
import * as types from 'data/exercises/types'
import * as helperTypes from 'data/types'

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

const shouldFetchExercises = (state) => state.exercises.fetchStatus !== helperTypes.STATUS_LOADED

export const fetchExercises = () => (dispatch, getState) => {
    return shouldFetchExercises(getState()) && dispatch(getExercises())
}


const postExercise = (workoutId) => ({
    [CALL_API]: {
        types: [
            types.EXERCISES_POST_REQUEST,
            types.EXERCISES_POST_SUCCESS,
            types.EXERCISES_POST_FAILURE
        ],
        endpoint: 'exercises',
        method: 'post',
        data: {
            workoutId
        }
    }
})

export const createExercise = (workoutId) => (dispatch, getState) => {
    return dispatch(postExercise(workoutId))
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

const updateExerciseAction = (dispatch, id, data, resolve, reject ) => (
    dispatch(putExercise(id, data)).then(resolve).catch(reject)
)

const debounceUpdateExercise = debounce(updateExerciseAction, 300)

export const updateExercise = (id, data) => (dispatch, getState) => {
    return new Promise(debounceUpdateExercise.bind(null, dispatch, id, data))
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
