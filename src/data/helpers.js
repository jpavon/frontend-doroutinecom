import { fetchStatusTypes } from 'shared/types'

export const defaultFetch = (state) => ({
    ...state,
    fetchStatus: fetchStatusTypes.LOADING
})

export const defaultFailure = (state, error) => ({
    ...state,
    fetchStatus: fetchStatusTypes.FAILED,
    error
})

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
