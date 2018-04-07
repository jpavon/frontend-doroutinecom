import { IAlert } from 'data/ui/types'

import constants from 'data/ui/constants'

const createAction = <T extends { type: constants }>(d: T): T => d

export const showLoading = () => createAction({
    type: constants.SHOW_LOADING
})

export const removeLoading = () => createAction({
    type: constants.REMOVE_LOADING
})

export const showAlert = (type: string, message: IAlert['message']) => createAction({
    type: constants.SHOW_ALERT,
    alert: {
        type,
        message
    }
})

export const removeAlert = () => createAction({
    type: constants.REMOVE_ALERT
})

export const setServerError = () => createAction({
    type: constants.SET_SERVER_ERROR
})

export const setOffline = () => createAction({
    type: constants.SET_OFFLINE
})
