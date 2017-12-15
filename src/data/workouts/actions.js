import { CALL_API } from 'utils/apiMiddleware'
import * as types from 'data/workouts/types'
import { shouldFetch } from 'data/shared'
import debounceUpdate from 'utils/debounceUpdate'

const getWorkouts = () => ({
    [CALL_API]: {
        types: [
            types.WORKOUTS_FETCH_REQUEST,
            types.WORKOUTS_FETCH_SUCCESS,
            types.WORKOUTS_FETCH_FAILURE
        ],
        endpoint: 'workouts',
        method: 'get'
    }
})

export const fetchWorkouts = (force = false) => (dispatch, getState) => {
    return (force || shouldFetch(types.NAME, getState())) && dispatch(getWorkouts())
}


const postWorkout = ({routineId, blockId}) => ({
    [CALL_API]: {
        types: [
            types.WORKOUTS_POST_REQUEST,
            types.WORKOUTS_POST_SUCCESS,
            types.WORKOUTS_POST_FAILURE
        ],
        endpoint: 'workouts',
        method: 'post',
        data: {
            routineId,
            blockId
        }
    }
})

export const createWorkout = ({routineId, blockId}) => (dispatch, getState) => {
    return dispatch(postWorkout({routineId, blockId}))
}

const putWorkout = (id, data) => ({
    [CALL_API]: {
        types: [
            types.WORKOUTS_PUT_REQUEST,
            types.WORKOUTS_PUT_SUCCESS,
            types.WORKOUTS_PUT_FAILURE
        ],
        endpoint: `workouts/${id}`,
        method: 'put',
        data,
        meta: {
            id
        }
    }
})

export const updateWorkout = (id, data) => (dispatch, getState) => {
    return debounceUpdate(() => dispatch(putWorkout(id, data)))
}

const deleteWorkout = (id) => ({
    [CALL_API]: {
        types: [
            types.WORKOUTS_DELETE_REQUEST,
            types.WORKOUTS_DELETE_SUCCESS,
            types.WORKOUTS_DELETE_FAILURE
        ],
        endpoint: `workouts/${id}`,
        method: 'delete',
        meta: {
            id
        }
    }
})

export const removeWorkout = (id) => (dispatch, getState) => {
    return dispatch(deleteWorkout(id))
}
