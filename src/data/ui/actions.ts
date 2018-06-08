import { IAlert } from 'data/ui/types'

import constants from 'data/ui/constants'

export const showLoading = () => ({
    type: constants.SHOW_LOADING as constants.SHOW_LOADING
})

export const removeLoading = () => ({
    type: constants.REMOVE_LOADING as constants.REMOVE_LOADING
})

export const showAlert = (type: string, message: IAlert['message']) => ({
    type: constants.SHOW_ALERT as constants.SHOW_ALERT,
    alert: {
        type,
        message
    }
})

export const removeAlert = () => ({
    type: constants.REMOVE_ALERT as constants.REMOVE_ALERT
})

export const setServerError = () => ({
    type: constants.SET_SERVER_ERROR as constants.SET_SERVER_ERROR
})

export const setOffline = () => ({
    type: constants.SET_OFFLINE as constants.SET_OFFLINE
})
