import { ICrudStateItem, IApiFailure, ICrudFetchSuccess, ICrudDataItem } from 'data/types'
import * as constants from 'data/constants'

// reducer crud utils

export const request = (state: ICrudStateItem): ICrudStateItem => ({
    ...state,
    fetchStatus: constants.STATUS_LOADING,
    error: null
})

export const putRequest = (state: ICrudStateItem, id: number): ICrudStateItem => ({
    ...request(state),
    entitiesStatus: {
        ...state.entitiesStatus,
        [id]: constants.STATUS_UPDATING
    }
})

export const deleteRequest = (state: ICrudStateItem, id: number): ICrudStateItem => ({
    ...request(state),
    entitiesStatus: {
        ...state.entitiesStatus,
        [id]: constants.STATUS_DELETING
    }
})

export const failure = (state: ICrudStateItem, error: IApiFailure): ICrudStateItem => ({
    ...state,
    fetchStatus: constants.STATUS_FAILED,
    error
})

export const getSuccess = (state: ICrudStateItem, payload: ICrudFetchSuccess): ICrudStateItem => ({
    ...state,
    fetchStatus: constants.STATUS_LOADED,
    entities: payload,
    entitiesStatus: (payload as ICrudDataItem[]).reduce((prev, current) => ({
        ...prev,
        [current.id]: constants.STATUS_LOADED
    }), {}),
    error: null
})

export const postSuccess = (state: ICrudStateItem, payload: ICrudDataItem): ICrudStateItem => ({
    ...state,
    fetchStatus: constants.STATUS_LOADED,
    entities: [
        ...state.entities,
        payload
    ],
    entitiesStatus: {
        ...state.entitiesStatus,
        [payload.id]: constants.STATUS_LOADED
    },
    error: null
})

export const putSuccess = (state: ICrudStateItem, payload: ICrudDataItem): ICrudStateItem => ({
    ...state,
    fetchStatus: constants.STATUS_LOADED,
    entities: (state.entities as ICrudDataItem[]).map((currentItem: ICrudDataItem) => {
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
        [payload.id]: constants.STATUS_LOADED
    },
    error: null
})

export const deleteSuccess = (state: ICrudStateItem, id: number): ICrudStateItem => ({
    ...state,
    fetchStatus: constants.STATUS_LOADED,
    entities: (state.entities as ICrudDataItem[]).filter((i) => (i.id !== id)),
    entitiesStatus: Object.keys(state.entitiesStatus)
        .filter((key) => Number(key) !== id)
        .reduce((prev, current) => ({
            ...prev,
            [current]: state.entitiesStatus[current]
        }), {}),
    error: null
})
