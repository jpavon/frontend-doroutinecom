// types

export const STATUS_NONE = 'NONE'
export const STATUS_LOADING = 'LOADING'
export const STATUS_LOADED = 'LOADED'
export const STATUS_FAILED = 'FAILED'

// reducer helpers

export const defaultRequest = (state) => ({
    ...state,
    fetchStatus: STATUS_LOADING
})

export const defaultFailure = (state, error) => ({
    ...state,
    fetchStatus: STATUS_FAILED,
    error
})

export const fetchItems = (state, payload) => {
    const reducedKeys = payload.reduce((acc, current) => {
        let obj = {}

        obj.entities = {
            ...acc.entities,
            [current.id]: current
        }

        // Object.keys(current).map((key) => {
        //     if (key.endsWith('Id')) {
        //         obj[key] = {
        //             ...acc[key]
        //         }

        //         if (obj[key][current[key]]) {
        //             obj[key][current[key]] = [...obj[key][current[key]], current.id]
        //         } else {
        //             obj[key][current[key]] = [current.id]
        //         }
        //     }
        // })

        return obj
    }, {})

    return {
        ...state,
        fetchStatus: STATUS_LOADED,
        ...reducedKeys
    }
}

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
