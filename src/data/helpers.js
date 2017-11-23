import * as helperTypes from 'data/types'

export const defaultFetch = (state) => ({
    ...state,
    fetchStatus: helperTypes.STATUS_LOADING
})

export const defaultFailure = (state, error) => ({
    ...state,
    fetchStatus: helperTypes.STATUS_FAILED,
    error
})

export const defaultMounted = (state) => {
    // if (state.entities instanceof Array) {
    //     return {
    //         ...state,
    //         fetchStatus: helperTypes.STATUS_LOADED,
    //     }
    // }

    return state
}

export const shouldFetch = (name, state) => (
    state[name].fetchStatus !== helperTypes.STATUS_LOADED &&
    state[name].fetchStatus === helperTypes.STATUS_NONE
)

export const insertItem = (array, item) => (
    [...array, item]
)

export const updateItem = (array, item) => {
    return array.map((i) => {
        if (i.id !== item.id) {
            return i;
        }

        return {
            ...i,
            ...item
        }
    })
}

export const deleteItem = (array, id) => (
    array.filter((i) => i.id !== id)
)
