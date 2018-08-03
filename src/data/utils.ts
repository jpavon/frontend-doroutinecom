import { StateMap, ApiFailure } from 'data/types'

import { statusConstants } from 'data/constants'

// selector utils

export const order = <T>(entityState: StateMap<T>): T[] =>
    entityState.entitiesOrder.map((id) => entityState.entities[id])

// reducer crud utils

interface Model {
    id: number
}

export const request = <T>(state: StateMap<T>): StateMap<T> => ({
    ...state,
    status: statusConstants.STATUS_LOADING,
    error: null
})

export const putRequest = <T>(state: StateMap<T>, id: number): StateMap<T> => ({
    ...request(state),
    entitiesStatus: {
        ...state.entitiesStatus,
        [id]: statusConstants.STATUS_UPDATING
    }
})

export const deleteRequest = <T>(
    state: StateMap<T>,
    id: number
): StateMap<T> => ({
    ...request(state),
    entitiesStatus: {
        ...state.entitiesStatus,
        [id]: statusConstants.STATUS_DELETING
    }
})

export const failure = <T>(
    state: StateMap<T>,
    error: ApiFailure
): StateMap<T> => ({
    ...state,
    status: statusConstants.STATUS_FAILED,
    error
})

export const getSuccess = <T extends Model>(
    state: StateMap<T>,
    payload: T[]
): StateMap<T> => ({
    ...state,
    status: statusConstants.STATUS_LOADED,
    entities: payload.reduce(
        (acc, current) => ({
            ...acc,
            [current.id]: current
        }),
        {}
    ),
    entitiesOrder: payload.map((item) => item.id),
    entitiesStatus: payload.reduce(
        (prev, current) => ({
            ...prev,
            [current.id]: statusConstants.STATUS_LOADED
        }),
        {}
    ),
    error: null
})

export const postSuccess = <T extends Model>(
    state: StateMap<T>,
    payload: T
): StateMap<T> => ({
    ...state,
    status: statusConstants.STATUS_LOADED,
    entities: { ...state.entities, [payload.id]: payload },
    entitiesOrder: [...state.entitiesOrder, payload.id],
    entitiesStatus: {
        ...state.entitiesStatus,
        [payload.id]: statusConstants.STATUS_LOADED
    },
    error: null
})

export const putSuccess = <T extends Model>(
    state: StateMap<T>,
    payload: T
): StateMap<T> => ({
    ...state,
    status: statusConstants.STATUS_LOADED,
    entities: { ...state.entities, [payload.id]: payload },
    entitiesStatus: {
        ...state.entitiesStatus,
        [payload.id]: statusConstants.STATUS_LOADED
    },
    error: null
})

export const deleteSuccess = <T extends Model>(
    state: StateMap<T>,
    id: number
): StateMap<T> => ({
    ...state,
    status: statusConstants.STATUS_LOADED,
    entities: Object.keys(state.entities)
        .filter((key) => Number(key) !== id)
        .reduce(
            (acc, current) => ({
                ...acc,
                [current]: state.entities[current]
            }),
            {}
        ),
    entitiesOrder: state.entitiesOrder.filter((item) => item !== id),
    entitiesStatus: Object.keys(state.entitiesStatus)
        .filter((key) => Number(key) !== id)
        .reduce(
            (acc, current) => ({
                ...acc,
                [current]: state.entitiesStatus[current]
            }),
            {}
        ),
    error: null
})
