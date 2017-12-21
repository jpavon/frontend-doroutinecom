import * as types from 'data/ui/types'

export const showLoading = () => ({
    type: types.SHOW_LOADING
})

export const removeLoading = () => ({
    type: types.REMOVE_LOADING
})

export const showAlert = (type, message) => ({
    type: types.SHOW_ALERT,
    alert: {
        type,
        message
    }
})

export const removeAlert = () => ({
    type: types.REMOVE_ALERT
})

export const setServerError = () => ({
    type: types.SET_SERVER_ERROR
})
