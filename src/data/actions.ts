import * as constants from 'data/constants'

export const getAppData = () => ({
    type: constants.GET_APP_DATA_REQUEST,
})

export const getAppDataSuccess = () => ({
    type: constants.GET_APP_DATA_SUCCESS,
})

export const getWorkoutsData = () => ({
    type: constants.GET_WORKOUTS_DATA_REQUEST,
})

export const getWorkoutsDataSuccess = () => ({
    type: constants.GET_WORKOUTS_DATA_SUCCESS,
})
