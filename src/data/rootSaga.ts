import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

import user from 'data/user/sagas'

function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
    yield all([
        user(),
        watchIncrementAsync()
    ])
}
