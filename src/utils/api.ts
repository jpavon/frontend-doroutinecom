import axios, { AxiosPromise, AxiosResponse, AxiosError } from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'
import * as store from 'store'

import env from 'env'

const api = (
    method: string,
    endpoint: string,
    data: object = {}
): AxiosPromise => {
    return axios
        .request({
            url: endpoint,
            method: method,
            baseURL: `${env.API_URL}/`,
            headers: {
                Authorization: `Bearer ${store.get('token')}`
            },
            data: data && decamelizeKeys(data),
            /* tslint:disable:no-any */
            transformResponse: ([] as any[]).concat(
                axios.defaults.transformResponse,
                (transformData: any) => camelizeKeys(transformData)
            )
        })
        .then((response: AxiosResponse) => {
            return Promise.resolve(response.data)
        })
        .catch((error: AxiosError) => {
            if (
                error.response &&
                error.response.data &&
                error.response.data.errors
            ) {
                return Promise.reject(error.response.data)
            }
            if (error.request) {
                return Promise.reject(error.response && error.response.data)
            }

            return Promise.reject('Server Error')
        })
}

export default {
    get: (endpoint: string, data?: object) => api('get', endpoint, data),
    post: (endpoint: string, data?: object) => api('post', endpoint, data),
    put: (endpoint: string, data?: object) => api('put', endpoint, data),
    delete: (endpoint: string, data?: object) => api('delete', endpoint, data)
}
