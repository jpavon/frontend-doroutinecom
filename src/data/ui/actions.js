import * as types from 'data/ui/types'

export const displayLoading = () => ({
    type: types.DISPLAY_LOADING
})

export const removeLoading = () => ({
    type: types.REMOVE_LOADING
})

export const addError = (message) => ({
    type: types.ADD_ERROR,
    message
})

export const removeError = () => ({
    type: types.REMOVE_ERROR
})
