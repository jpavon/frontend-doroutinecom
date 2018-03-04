import { takeLatest } from 'redux-saga/effects'

import { IApiAction } from 'data/types'

import apiSaga from 'utils/apiSaga'
import * as constants from 'data/workouts/constants'
import * as actions from 'data/workouts/actions'

function* getWorkoutsSaga(action: IApiAction) {
    yield* apiSaga(action, actions.getWorkoutsSuccess, actions.getWorkoutsFailure)
}

function* postWorkoutSaga(action: IApiAction) {
    yield* apiSaga(action, actions.postWorkoutSuccess, actions.postWorkoutFailure)
}

function* putWorkoutSaga(action: IApiAction) {
    yield* apiSaga(action, actions.putWorkoutSuccess, actions.putWorkoutFailure)
}

function* deleteWorkoutSaga(action: IApiAction) {
    yield* apiSaga(action, actions.deleteWorkoutSuccess, actions.deleteWorkoutFailure)
}

export default [
    takeLatest(constants.WORKOUTS_GET_REQUEST, getWorkoutsSaga),
    takeLatest(constants.WORKOUTS_PUT_REQUEST, putWorkoutSaga),
    takeLatest(constants.WORKOUTS_POST_REQUEST, postWorkoutSaga),
    takeLatest(constants.WORKOUTS_DELETE_REQUEST, deleteWorkoutSaga),
]
