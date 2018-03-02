import { all } from 'redux-saga/effects'

import user from 'data/user/sagas'
import ui from 'data/ui/sagas'

export default function* rootSaga() {
    yield all([
        ...user,
        ...ui
    ])
}
