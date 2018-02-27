import { all } from 'redux-saga/effects'

import user from 'data/user/sagas'

export default function* rootSaga() {
    yield all([
        user()
    ])
}
