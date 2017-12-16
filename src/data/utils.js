// types

export const STATUS_NONE = 'NONE'
export const STATUS_LOADING = 'LOADING'
export const STATUS_LOADED = 'LOADED'
export const STATUS_FAILED = 'FAILED'


// reducer helpers

export const request = (state) => ({
    ...state,
    fetchStatus: STATUS_LOADING
})

export const failure = (state, error) => ({
    ...state,
    fetchStatus: STATUS_FAILED,
    error
})

export const insertItem = (array, item) => (
    [...array, item]
)

export const updateItem = (array, item) => (
    array.map((currentItem) => {
        if (currentItem.id !== item.id) {
            return currentItem;
        }

        return {
            ...currentItem,
            ...item
        }
    })
)

export const deleteItem = (array, id) => {
    return array.filter((i) => (i.id !== id))
}

// action helpers

export const shouldFetch = (name, state) => (
    state[name].fetchStatus !== STATUS_LOADED
)
