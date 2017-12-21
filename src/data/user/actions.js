import { CALL_API } from 'utils/apiMiddleware'
import debounceUpdate from 'utils/debounceUpdate'
import * as types from 'data/user/types'
import { shouldFetch } from 'data/utils'
import { showAlert } from 'data/ui/actions'

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

const putUser = (id, data) => ({
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

export const updateUser = (id, data) => (dispatch, getState) => {
    return debounceUpdate(() => dispatch(putUser(id, data)))
}

const loginUserAction = ({email, password}) => ({
    [CALL_API]: {
        types: [
            types.USER_LOGIN_REQUEST,
            types.USER_LOGIN_SUCCESS,
            types.USER_LOGIN_FAILURE
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
            types.USER_REGISTER_REQUEST,
            types.USER_REGISTER_SUCCESS,
            types.USER_REGISTER_FAILURE
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
            types.USER_PASSWORD_FORGOTTEN_REQUEST,
            types.USER_PASSWORD_FORGOTTEN_SUCCESS,
            types.USER_PASSWORD_FORGOTTEN_FAILURE
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
            types.USER_PASSWORD_RESET_REQUEST,
            types.USER_PASSWORD_RESET_SUCCESS,
            types.USER_PASSWORD_RESET_FAILURE
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
    type: types.USER_AUTH
})

export const authUser = (token) => (dispatch, getState) => {
    localStorage.setItem('token', token)

    dispatch(authUserAction())
}

const logoutUserAction = () => ({
    type: types.USER_LOGOUT
})

export const logoutUser = (error) => (dispatch, getState) => {
    localStorage.removeItem('token')

    dispatch(logoutUserAction())

    error && dispatch(showAlert('error', error))
}
