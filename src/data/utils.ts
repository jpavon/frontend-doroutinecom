import { IStateMap, IApiFailure, IFetchStatusTypes, IEntitiesStatusTypes } from 'data/types'
import * as constants from 'data/constants'

// reducer crud utils

type Model = {
    id: number
}

export const request = <T>(state: IStateMap<T>) => ({
    ...state,
    fetchStatus: constants.STATUS_LOADING as IFetchStatusTypes,
    error: null
})

export const putRequest = <T>(state: IStateMap<T>, id: number) => ({
    ...request(state),
    entitiesStatus: {
        ...state.entitiesStatus,
        [id]: constants.STATUS_UPDATING as IEntitiesStatusTypes
    }
})

export const deleteRequest = <T>(state: IStateMap<T>, id: number) => ({
    ...request(state),
    entitiesStatus: {
        ...state.entitiesStatus,
        [id]: constants.STATUS_DELETING as IEntitiesStatusTypes
    }
})

export const failure = <T>(state: IStateMap<T>, error: IApiFailure) => ({
    ...state,
    fetchStatus: constants.STATUS_FAILED as IFetchStatusTypes,
    error
})

export const getSuccess = <T extends Model>(state: IStateMap<T>, payload: T[]) => ({
    ...state,
    fetchStatus: constants.STATUS_LOADED as IFetchStatusTypes,
    entities: payload,
    entitiesStatus: payload.reduce((prev, current) => ({
        ...prev,
        [current.id]: constants.STATUS_LOADED as IEntitiesStatusTypes
    }), {}),
    error: null
})

export const postSuccess = <T extends Model>(state: IStateMap<T>, payload: T) => ({
    ...state,
    fetchStatus: constants.STATUS_LOADED as IFetchStatusTypes,
    entities: [
        ...state.entities,
        payload
    ],
    entitiesStatus: {
        ...state.entitiesStatus,
        [payload.id]: constants.STATUS_LOADED as IEntitiesStatusTypes
    },
    error: null
})

export const putSuccess = <T extends Model>(state: IStateMap<T>, payload: T) => ({
    ...state,
    fetchStatus: constants.STATUS_LOADED as IFetchStatusTypes,
    entities: state.entities.map((currentItem) => {
        if (currentItem.id !== payload.id) {
            return currentItem
        }

        return Object.assign({}, currentItem, payload)

        // change to spread when issue fixed
        // https://github.com/Microsoft/TypeScript/issues/10727
        // return {
        //     ...currentItem,
        //     ...payload
        // }
    }),
    entitiesStatus: {
        ...state.entitiesStatus,
        [payload.id]: constants.STATUS_LOADED as IEntitiesStatusTypes
    },
    error: null
})

export const deleteSuccess = <T extends Model>(state: IStateMap<T>, id: number) => ({
    ...state,
    fetchStatus: constants.STATUS_LOADED as IFetchStatusTypes,
    entities: state.entities.filter((i) => (i.id !== id)),
    entitiesStatus: Object.keys(state.entitiesStatus)
        .filter((key) => Number(key) !== id)
        .reduce((prev, current) => ({
            ...prev,
            [current]: state.entitiesStatus[current] as IEntitiesStatusTypes
        }), {}),
    error: null
})
