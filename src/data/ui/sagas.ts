import { take, spawn } from 'redux-saga/effects'
import scrollTo from 'utils/scrollTo'

import * as constants from 'data/ui/constants'

function* alertSaga() {
    while (true) {
        yield take(constants.SHOW_ALERT)

        scrollTo('alert', { tolerance: 15 })
    }
}

export default [
    spawn(alertSaga)
]
