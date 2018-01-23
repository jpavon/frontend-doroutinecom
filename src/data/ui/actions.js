import * as types from 'data/ui/types'
import scrollTo from 'utils/scrollTo'

export const showLoading = () => ({
    type: types.SHOW_LOADING
})

export const removeLoading = () => ({
    type: types.REMOVE_LOADING
})

export const showAlert = (type, message) => (dispatch, getState) => {
    scrollTo('alert', { tolerance: 15 })

    return dispatch({
        type: types.SHOW_ALERT,
        alert: {
            type,
            message
        }
    })
}

export const removeAlert = () => ({
    type: types.REMOVE_ALERT
})

export const setServerError = () => ({
    type: types.SET_SERVER_ERROR
})
