import { all } from 'redux-saga/effects'

import routines from 'data/routines/sagas'
import workouts from 'data/workouts/sagas'
import lifts from 'data/lifts/sagas'
import sets from 'data/sets/sagas'
import user from 'data/user/sagas'
import ui from 'data/ui/sagas'
import global from 'data/sagas'

export default function* rootSaga() {
    yield all([
        ...routines,
        ...sets,
        ...workouts,
        ...lifts,
        ...user,
        ...ui,
        ...global
    ])
}
