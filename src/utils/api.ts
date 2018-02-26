import axios, { AxiosPromise, AxiosResponse, AxiosError } from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'
import * as browserStore from 'store'

import env from 'env'
// import { unauthUser } from 'data/user/actions'
// import { setServerError, setOffline } from 'data/ui/actions'

export interface IApiOptions {
    endpoint: string
    method: string
    data?: object
}

export default (options: IApiOptions): AxiosPromise => {
    return axios.request({
        url: options.endpoint,
        method: options.method,
        baseURL: `${env.API_URL}/`,
        headers: {
            'Authorization':
            `Bearer ${browserStore.get('token')}`
        },
        data: options.data && decamelizeKeys(options.data),
        /* tslint:disable:no-any */
        transformResponse: ([] as any[]).concat(
            axios.defaults.transformResponse,
            (data: any) => camelizeKeys(data)
        )
    }).then((response: AxiosResponse) => {
        return Promise.resolve(response.data)
    }).catch((error: AxiosError) => {
        // if (err.response.data.message === 'Unauthenticated.') {
        //     store.dispatch(unauthUser('You need to log in for access to this page.'))
        // }

        // if (err.response.status > 500) {
        //     store.dispatch(setServerError())
        // }

        if (error.response && error.response.data && error.response.data.errors) {
            return Promise.reject(error.response.data)
        }

        if (error.request) {
            return Promise.reject(error.request)
        }

        return Promise.reject('Server Error')
    })
}
