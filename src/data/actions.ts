import * as constants from 'data/constants'

export const getWorkoutsData = () => ({
    type: constants.GET_WORKOUTS_DATA_REQUEST,
})

export const getWorkoutsDataSuccess = () => ({
    type: constants.GET_WORKOUTS_DATA_SUCCESS,
})
