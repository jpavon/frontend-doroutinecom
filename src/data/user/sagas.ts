// import { delay } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects'

import api from 'utils/api'
import * as constants from 'data/user/constants'

interface Options {
    type: string
    options: {
        endpoint: string
        method: string
        data: object
    }
}

export function* login(action: Options) {
    try {
        const payload = yield call(api, action.options)

        yield put({
            type: constants.USER_LOGIN_SUCCESS,
            payload
        })
    } catch (error) {
        yield put({
            type: constants.USER_LOGIN_FAILURE,
            error
        })
    }
}

export default function* root() {
    yield all([
        takeLatest(constants.USER_LOGIN_REQUEST, login),
    ])
}
