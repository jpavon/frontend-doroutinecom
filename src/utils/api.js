import axios from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'
import browserStore from 'store'

import env from 'env'
import { unauthUser } from 'data/user/actions'
// import { setServerError, setOffline } from 'data/ui/actions'

export default (options) => {
    console.log(options)
    return axios.request({
        url: options.endpoint,
        method: options.method,
        baseURL: `${env.API_URL}/`,
        headers: {
            'Authorization':
            `Bearer ${browserStore.get('token')}`
        },
        data: decamelizeKeys(options.data),
        transformResponse: axios.defaults.transformResponse.concat((data) => camelizeKeys(data)),
    }).then((response) => {
        return Promise.resolve(response.data)
    }).catch((err) => {
        // if (err.response.data.message === 'Unauthenticated.') {
        //     store.dispatch(unauthUser('You need to log in for access to this page.'))
        // }

        // if (err.response.status > 500) {
        //     store.dispatch(setServerError())
        // }

        if (err.response.data.errors) {
            return Promise.reject(err.response.data)
        }
    })
}
