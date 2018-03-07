import { IAlert } from 'data/ui/types'

import * as constants from 'data/ui/constants'

export const showLoading = () => ({
    type: constants.SHOW_LOADING
})

export const removeLoading = () => ({
    type: constants.REMOVE_LOADING
})

export const showAlert = (type: string, message: IAlert['message']) => ({
    type: constants.SHOW_ALERT,
    alert: {
        type,
        message
    }
})

export const removeAlert = () => ({
    type: constants.REMOVE_ALERT
})

export const setServerError = () => ({
    type: constants.SET_SERVER_ERROR
})

export const setOffline = () => ({
    type: constants.SET_OFFLINE
})
