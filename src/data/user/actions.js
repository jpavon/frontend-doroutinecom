import debounce from 'lodash/debounce'

import { CALL_API } from 'middleware/api'
import * as types from 'data/user/types'
import { shouldFetch } from 'data/helpers'

const getUser = () => ({
    [CALL_API]: {
        types: [
            types.USER_FETCH_REQUEST,
            types.USER_FETCH_SUCCESS,
            types.USER_FETCH_FAILURE
        ],
        endpoint: 'user',
        method: 'get'
    }
})

export const fetchUser = (force = false) => (dispatch, getState) => {
    return (force || shouldFetch(types.NAME, getState())) && dispatch(getUser())
}


const postUser = (data) => ({
    [CALL_API]: {
        types: [
            types.USER_POST_REQUEST,
            types.USER_POST_SUCCESS,
            types.USER_POST_FAILURE
        ],
        endpoint: 'user',
        method: 'post',
        data
    }
})

export const createUser = (data) => (dispatch, getState) => {
    return dispatch(postUser(data))
}

const putUser = (data) => ({
    [CALL_API]: {
        types: [
            types.USER_PUT_REQUEST,
            types.USER_PUT_SUCCESS,
            types.USER_PUT_FAILURE
        ],
        endpoint: 'user',
        method: 'put',
        data
    }
})

const updateUserAction = (dispatch, data, resolve, reject ) => (
    dispatch(putUser(data)).then(resolve).catch(reject)
)

const debounceUpdateUser = debounce(updateUserAction, 300)

export const updateUser = (data) => (dispatch, getState) => {
    return new Promise(debounceUpdateUser.bind(null, dispatch, data))
}

// const deleteUser = () => ({
//     [CALL_API]: {
//         types: [
//             types.USER_DELETE_REQUEST,
//             types.USER_DELETE_SUCCESS,
//             types.USER_DELETE_FAILURE
//         ],
//         endpoint: 'user',
//         method: 'delete'
//     }
// })

// export const removeUser = () => (dispatch, getState) => {
//     return dispatch(deleteUser())
// }
