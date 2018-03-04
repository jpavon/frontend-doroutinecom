import { all } from 'redux-saga/effects'

import workouts from 'data/workouts/sagas'
import user from 'data/user/sagas'
import ui from 'data/ui/sagas'

export default function* rootSaga() {
    yield all([
        ...workouts,
        ...user,
        ...ui
    ])
}
