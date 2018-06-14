import { IAlert } from 'data/ui/types'

import action from 'utils/action'
import constants from 'data/ui/constants'

export const showLoading = action(constants.SHOW_LOADING)

export const removeLoading = action(constants.REMOVE_LOADING)

export const showAlert = action(constants.SHOW_ALERT).with(
    (alert: IAlert) => alert
)

export const removeAlert = action(constants.REMOVE_ALERT)

export const setServerError = action(constants.SET_SERVER_ERROR)

export const setOffline = action(constants.SET_OFFLINE)
