import * as constants from 'data/ui/constants'
import scrollTo from 'utils/scrollTo'

export const showLoadingAction = () => ({
    type: constants.SHOW_LOADING
})

// REMOVE
export const showLoading = () => ({
    type: constants.SHOW_LOADING
})

export const removeLoading = () => ({
    type: constants.REMOVE_LOADING
})

export const showAlert = (type, message) => (dispatch, getState) => {
    scrollTo('alert', { tolerance: 15 })

    return dispatch({
        type: constants.SHOW_ALERT,
        alert: {
            type,
            message
        }
    })
}

export const removeAlert = () => ({
    type: constants.REMOVE_ALERT
})

export const setServerError = () => ({
    type: constants.SET_SERVER_ERROR
})

export const setOffline = () => ({
    type: constants.SET_OFFLINE
})
