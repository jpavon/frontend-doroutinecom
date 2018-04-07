import { takeLatest } from 'redux-saga/effects'
import scrollTo from 'utils/scrollTo'

import constants from 'data/ui/constants'

function* alertSaga() {
    yield scrollTo('alert', { tolerance: 15 })
}

export default [
    takeLatest(constants.SHOW_ALERT, alertSaga)
]
