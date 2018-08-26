import axios, { AxiosPromise, AxiosResponse, AxiosError } from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'
import * as store from 'store'
import { from } from 'rxjs'

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

export default (method: string, endpoint: string, data?: object) =>
    from(api(method, endpoint, data))
