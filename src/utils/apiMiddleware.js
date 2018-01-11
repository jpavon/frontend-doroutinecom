import axios from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'

import { logoutUser } from 'data/user/actions'
import { setServerError } from 'data/ui/actions'

export const CALL_API = 'CALL_API'
const UNAUTH = 'Unauthenticated.'
const SERVER_ERROR = 'SERVER_ERROR'

const callApi = (endpoint, method, data, store) => {
    return axios.request({
        url: endpoint,
        method: method,
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
            'Authorization':
            `Bearer ${store.getState().user.entity.apiToken || localStorage.getItem('token')}`
        },
        data: decamelizeKeys(data),
        transformResponse: axios.defaults.transformResponse.concat((data) => camelizeKeys(data)),
    }).then((response) => {
        return Promise.resolve(response.data)
    }).catch((err) => {
        if (err.response.data.message === UNAUTH) {
            return Promise.reject(UNAUTH)
        } else if (err.response.data.exception) {
            return Promise.reject(SERVER_ERROR)
        } else {
            return Promise.reject(err.response.data)
        }
    })
}

export default store => next => action => {
    const callAPI = action[CALL_API]

    if (typeof callAPI === 'undefined') {
        return next(action)
    }

    let { endpoint, method, data, meta } = callAPI
    const { types } = callAPI

    if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState())
    }

    if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.')
    }

    if (typeof method !== 'string') {
        throw new Error('Specify a string method.')
    }

    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types.')
    }

    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings.')
    }

    const actionWith = (data) => {
        const finalAction = Object.assign({}, action, data)
        delete finalAction[CALL_API]
        return finalAction
    }

    const [ requestType, successType, failureType ] = types

    next(actionWith({ type: requestType, meta }))

    return callApi(endpoint, method, data, store)
        .then((payload) => next(actionWith({
            payload,
            type: successType,
            meta
        })))
        .catch((error) => {
            if (error === UNAUTH) {
                if (!store.getState().user.isAuth) return
                store.dispatch(logoutUser('An error ocurred, try to log in again.'))
            } else if (error === SERVER_ERROR) {
                store.dispatch(setServerError())
            } else {
                return next(actionWith({
                    type: failureType,
                    error: error || 'Server error.'
                }))
            }
        })
}
