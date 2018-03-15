import { takeLatest, take, put } from 'redux-saga/effects'

import { IApiAction, ISuccessAction } from 'data/types'
import { ILift } from 'data/lifts/types'

import history from 'utils/history'
import apiSaga from 'utils/apiSaga'
import * as constants from 'data/lifts/constants'
import * as actions from 'data/lifts/actions'
import * as exercisesActions from 'data/exercises/actions'

function* getLiftsSaga(action: IApiAction) {
    yield* apiSaga(action, actions.getLiftsSuccess, actions.getLiftsFailure)
}

function* postLiftSaga(action: IApiAction) {
    yield* apiSaga(action, actions.postLiftSuccess, actions.postLiftFailure)
}

function* putLiftSaga(action: IApiAction) {
    yield* apiSaga(action, actions.putLiftSuccess, actions.putLiftFailure)
}

function* deleteLiftSaga(action: IApiAction) {
    yield* apiSaga(action, actions.deleteLiftSuccess, actions.deleteLiftFailure)
}

function* liftPostSuccess(action: ISuccessAction<ILift>) {
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
