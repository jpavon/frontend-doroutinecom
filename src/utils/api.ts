import axios, { AxiosPromise, AxiosResponse, AxiosError } from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'
import * as store from 'store'

import env from 'env'

export const SERVER_ERROR = 'server-error'

const api = (
    method: string,
    endpoint: string,
    data: object = {}
): AxiosPromise => {
    return axios
        .request({
            url: endpoint,
            method,
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
            if (error.response && error.response.data) {
                return Promise.reject(error.response.data)
            }

            return Promise.reject({ message: SERVER_ERROR })
        })
}

export default {
    get: (endpoint: string, data?: object) => api('get', endpoint, data),
    post: (endpoint: string, data?: object) => api('post', endpoint, data),
    put: (endpoint: string, data?: object) => api('put', endpoint, data),
    delete: (endpoint: string, data?: object) => api('delete', endpoint, data)
}
