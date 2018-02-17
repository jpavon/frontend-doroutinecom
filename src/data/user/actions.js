import store from 'store'

import { CALL_API } from 'utils/apiMiddleware'
import * as constants from 'data/user/constants'
import { shouldFetch } from 'data/utils'
import { showAlert } from 'data/ui/actions'
import { fetchAppData } from 'data/globals'

const getUser = () => ({
    [CALL_API]: {
        types: [
            constants.USER_FETCH_REQUEST,
            constants.USER_FETCH_SUCCESS,
            constants.USER_FETCH_FAILURE
        ],
        endpoint: 'user',
        method: 'get'
    }
})

export const fetchUser = (force = false) => (dispatch, getState) => {
    return (force || shouldFetch(constants.NAME, getState())) && dispatch(getUser())
}

const putUser = (id, data) => ({
    [CALL_API]: {
        types: [
            constants.USER_PUT_REQUEST,
            constants.USER_PUT_SUCCESS,
            constants.USER_PUT_FAILURE
        ],
        endpoint: 'user',
        method: 'put',
        data
    }
})

export const updateUser = (id, data) => (dispatch, getState) => {
    return dispatch(putUser(id, data))
}

const loginUserAction = ({email, password}) => ({
    [CALL_API]: {
        types: [
            constants.USER_LOGIN_REQUEST,
            constants.USER_LOGIN_SUCCESS,
            constants.USER_LOGIN_FAILURE
        ],
        endpoint: 'login',
        method: 'post',
        data: {
            email,
            password
        }
    }
})

export const loginUser = (data) => (dispatch, getState) => {
    return dispatch(loginUserAction(data))
}

const registerUserAction = ({name, email, password, passwordConfirmation}) => ({
    [CALL_API]: {
        types: [
            constants.USER_REGISTER_REQUEST,
            constants.USER_REGISTER_SUCCESS,
            constants.USER_REGISTER_FAILURE
        ],
        endpoint: 'register',
        method: 'post',
        data: {
            name,
            email,
            password,
            passwordConfirmation
        }
    }
})

export const registerUser = (data) => (dispatch, getState) => {
    return dispatch(registerUserAction(data))
}

const passwordForgottenAction = ({email}) => ({
    [CALL_API]: {
        types: [
            constants.USER_PASSWORD_FORGOTTEN_REQUEST,
            constants.USER_PASSWORD_FORGOTTEN_SUCCESS,
            constants.USER_PASSWORD_FORGOTTEN_FAILURE
        ],
        endpoint: 'password/email',
        method: 'post',
        data: {
            email
        }
    }
})

export const passwordForgotten = (data) => (dispatch, getState) => {
    return dispatch(passwordForgottenAction(data))
}

const passwordResetAction = ({token, email, password, passwordConfirmation}) => ({
    [CALL_API]: {
        types: [
            constants.USER_PASSWORD_RESET_REQUEST,
            constants.USER_PASSWORD_RESET_SUCCESS,
            constants.USER_PASSWORD_RESET_FAILURE
        ],
        endpoint: 'password/reset',
        method: 'post',
        data: {
            token,
            email,
            password,
            passwordConfirmation
        }
    }
})

export const passwordReset = (data) => (dispatch, getState) => {
    return dispatch(passwordResetAction(data))
}

const authUserAction = () => ({
    type: constants.USER_AUTH
})

export const authUser = (token) => (dispatch, getState) => {
    store.set('token', token)

    dispatch(authUserAction())
    dispatch(fetchAppData())
}

const unauthUserAction = () => ({
    type: constants.USER_UNAUTH
})

export const unauthUser = (error) => (dispatch, getState) => {
    store.remove('token')

    dispatch(unauthUserAction())

    error && dispatch(showAlert('error', error))
}
