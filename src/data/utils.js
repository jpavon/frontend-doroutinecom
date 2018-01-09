// type utils

export const STATUS_NONE = 'NONE'
export const STATUS_LOADING = 'LOADING'
export const STATUS_LOADED = 'LOADED'
export const STATUS_FAILED = 'FAILED'

export const STATUS_UPDATING = 'UPDATING'
export const STATUS_DELETING = 'DELETING'

// reducer utils

export const request = (state) => ({
    ...state,
    fetchStatus: STATUS_LOADING
})

export const putRequest = (state, id) => ({
    ...request(state),
    entitiesStatus: {
        ...state.entitiesStatus,
        [id]: STATUS_UPDATING
    }
})

export const deleteRequest = (state, id) => ({
    ...state,
    fetchStatus: STATUS_LOADING,
    entitiesStatus: {
        ...state.entitiesStatus,
        [id]: STATUS_DELETING
    }
})

export const failure = (state, error) => ({
    ...state,
    fetchStatus: STATUS_FAILED,
    error
})

export const fetch = (state, payload) => ({
    ...state,
    fetchStatus: STATUS_LOADED,
    entities: payload,
    entitiesStatus: payload.reduce((prev, current) => ({
        ...prev,
        [current.id]: STATUS_LOADED
    }), {})
})

export const create = (state, payload) => ({
    ...state,
    fetchStatus: STATUS_LOADED,
    entities: [
        ...state.entities,
        payload
    ],
    entitiesStatus: {
        ...state.entitiesStatus,
        [payload.id]: STATUS_LOADED
    }
})

export const update = (state, payload) => ({
    ...state,
    fetchStatus: STATUS_LOADED,
    entities: state.entities.map((currentItem) => {
        if (currentItem.id !== payload.id) {
            return currentItem
        }

        return {
            ...currentItem,
            ...payload
        }
    }),
    entitiesStatus: {
        ...state.entitiesStatus,
        [payload.id]: STATUS_LOADED
    }
})

export const remove = (state, id) => ({
    ...state,
    fetchStatus: STATUS_LOADED,
    entities: state.entities.filter((i) => (i.id !== id)),
    entitiesStatus: Object.keys(state.entitiesStatus)
        .filter((key) => key !== id)
        .reduce((prev, current) => ({
            ...prev,
            [current]: state.entitiesStatus[current]
        }), {})
})

// action utils

export const shouldFetch = (name, state) => (
    state[name].fetchStatus !== STATUS_LOADED
)
