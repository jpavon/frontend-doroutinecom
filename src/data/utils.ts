import { IStateMap, IApiFailure, IFetchStatusType, IEntitiesStatusType } from 'data/types'
import * as constants from 'data/constants'

// reducer crud utils

type Model = {
    id: number
}

export const request = <T>(state: IStateMap<T>): IStateMap<T> => ({
    ...state,
    fetchStatus: constants.STATUS_LOADING as IFetchStatusType,
    error: null
})

export const putRequest = <T>(state: IStateMap<T>, id: number): IStateMap<T> => ({
    ...request(state),
    entitiesStatus: {
        ...state.entitiesStatus,
        [id]: constants.STATUS_UPDATING as IEntitiesStatusType
    }
})

export const deleteRequest = <T>(state: IStateMap<T>, id: number): IStateMap<T> => ({
    ...request(state),
    entitiesStatus: {
        ...state.entitiesStatus,
        [id]: constants.STATUS_DELETING as IEntitiesStatusType
    }
})

export const failure = <T>(state: IStateMap<T>, error: IApiFailure): IStateMap<T> => ({
    ...state,
    fetchStatus: constants.STATUS_FAILED as IFetchStatusType,
    error
})

export const getSuccess = <T extends Model>(state: IStateMap<T>, payload: T[]): IStateMap<T> => ({
    ...state,
    fetchStatus: constants.STATUS_LOADED as IFetchStatusType,
    entities: payload,
    entitiesStatus: payload.reduce((prev, current) => ({
        ...prev,
        [current.id]: constants.STATUS_LOADED as IEntitiesStatusType
    }), {}),
    error: null
})

export const postSuccess = <T extends Model>(state: IStateMap<T>, payload: T): IStateMap<T> => ({
    ...state,
    fetchStatus: constants.STATUS_LOADED as IFetchStatusType,
    entities: [
        ...state.entities,
        payload
    ],
    entitiesStatus: {
        ...state.entitiesStatus,
        [payload.id]: constants.STATUS_LOADED as IEntitiesStatusType
    },
    error: null
})

export const putSuccess = <T extends Model>(state: IStateMap<T>, payload: T): IStateMap<T> => ({
    ...state,
    fetchStatus: constants.STATUS_LOADED as IFetchStatusType,
    entities: state.entities.map((currentItem) => {
        if (currentItem.id !== payload.id) {
            return currentItem
        }

        return Object.assign({}, currentItem, payload)

        // spread bug https://github.com/Microsoft/TypeScript/issues/10727
        // https://github.com/Microsoft/TypeScript/pull/13288#issuecomment-367396818
        // return {
        //     ...currentItem,
        //     ...payload
        // }
    }),
    entitiesStatus: {
        ...state.entitiesStatus,
        [payload.id]: constants.STATUS_LOADED as IEntitiesStatusType
    },
    error: null
})

export const deleteSuccess = <T extends Model>(state: IStateMap<T>, id: number): IStateMap<T> => ({
    ...state,
    fetchStatus: constants.STATUS_LOADED as IFetchStatusType,
    entities: state.entities.filter((i) => (i.id !== id)),
    entitiesStatus: Object.keys(state.entitiesStatus)
        .filter((key) => Number(key) !== id)
        .reduce((prev, current) => ({
            ...prev,
            [current]: state.entitiesStatus[current] as IEntitiesStatusType
        }), {}),
    error: null
})
