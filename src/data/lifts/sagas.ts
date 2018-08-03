import { takeLatest, take, put } from 'redux-saga/effects'

import { ApiAction, SuccessAction } from 'data/types'
import { Lift } from 'data/lifts/types'

import history from 'utils/history'
import apiSaga from 'utils/apiSaga'
import constants from 'data/lifts/constants'
import * as actions from 'data/lifts/actions'
import * as exercisesActions from 'data/exercises/actions'

function* getLiftsSaga(action: ApiAction) {
    yield* apiSaga(action, actions.getLiftsSuccess, actions.getLiftsFailure)
}

function* postLiftSaga(action: ApiAction) {
    yield* apiSaga(action, actions.postLiftSuccess, actions.postLiftFailure)
}

function* putLiftSaga(action: ApiAction) {
    yield* apiSaga(action, actions.putLiftSuccess, actions.putLiftFailure)
}

function* deleteLiftSaga(action: ApiAction) {
    yield* apiSaga(action, actions.deleteLiftSuccess, actions.deleteLiftFailure)
}

function* liftPostSuccess(action: SuccessAction<Lift>) {
    yield history.push(`/lifts/${action.payload.id}`)
}

function* liftDeleteRequest() {
    yield take(constants.LIFTS_DELETE_SUCCESS)

    yield history.push('/lifts')

    yield put(exercisesActions.getExercises())
}

export default [
    takeLatest(constants.LIFTS_GET_REQUEST, getLiftsSaga),
    takeLatest(constants.LIFTS_PUT_REQUEST, putLiftSaga),
    takeLatest(constants.LIFTS_POST_REQUEST, postLiftSaga),
    takeLatest(constants.LIFTS_DELETE_REQUEST, deleteLiftSaga),

    takeLatest(constants.LIFTS_POST_SUCCESS, liftPostSuccess),
    takeLatest(constants.LIFTS_DELETE_REQUEST, liftDeleteRequest)
]
