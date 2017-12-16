// types utils

export const STATUS_NONE = 'NONE'
export const STATUS_LOADING = 'LOADING'
export const STATUS_LOADED = 'LOADED'
export const STATUS_FAILED = 'FAILED'

// reducer utils

export const request = (state) => ({
    ...state,
    fetchStatus: STATUS_LOADING
})

export const failure = (state, error) => ({
    ...state,
    fetchStatus: STATUS_FAILED,
    error
})

export const fetch = (state, payload) => ({
    ...state,
    fetchStatus: STATUS_LOADED,
    entities: payload
})

export const create = (state, payload) => ({
    ...state,
    fetchStatus: STATUS_LOADED,
    entities: [
        ...state.entities,
        payload
    ]
})

export const update = (state, payload) => ({
    ...state,
    fetchStatus: STATUS_LOADED,
    entities: state.entities.map((currentItem) => {
        if (currentItem.id !== payload.id) {
            return currentItem;
        }

        return {
            ...currentItem,
            ...payload
        }
    })
})

export const remove = (state, id) => ({
    ...state,
    fetchStatus: STATUS_LOADED,
    entities: state.entities.filter((i) => (i.id !== id))
})

// action utils

export const shouldFetch = (name, state) => (
    state[name].fetchStatus !== STATUS_LOADED
)
