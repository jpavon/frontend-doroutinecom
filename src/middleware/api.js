import axios from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'

const callApi = (endpoint, method, data) => {
    return axios.request({
        url: endpoint,
        method: method,
        baseURL: 'http://192.168.10.10/api/',
        data: decamelizeKeys(data),
        transformResponse: axios.defaults.transformResponse.concat((data) => camelizeKeys(data)),
    }).then((response) => {
        return response.data
    }).catch((err) => {
        // console.log('catch api error')
        return Promise.reject(err)
    })
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = 'CALL_API'

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
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

    next(actionWith({ type: requestType }))

    return callApi(endpoint, method, data, meta)
        .then((payload) => next(actionWith({
            payload,
            type: successType,
            meta
        })))
        .catch((error) => next(actionWith({
            type: failureType,
            error: error.response.data || 'Something bad happened'
        })))
}
