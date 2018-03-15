import { takeLatest, call } from 'redux-saga/effects'

import { IApiAction, ISuccessAction } from 'data/types'
import { IWorkout } from 'data/workouts/types'

import history from 'utils/history'
import apiSaga from 'utils/apiSaga'
import * as constants from 'data/workouts/constants'
import * as actions from 'data/workouts/actions'
import { getWorkoutDataSaga } from 'data/sagas'

function* getWorkoutsSaga(action: IApiAction) {
    yield* apiSaga(action, actions.getWorkoutsSuccess, actions.getWorkoutsFailure)
}

function* postWorkoutSaga(action: IApiAction) {
    yield* apiSaga(action, actions.postWorkoutSuccess, actions.postWorkoutFailure)
}

function* postWorkoutFromSaga(action: IApiAction) {
    yield* apiSaga(action, actions.postWorkoutFromSuccess, actions.postWorkoutFromFailure)
}

function* putWorkoutSaga(action: IApiAction) {
    yield* apiSaga(action, actions.putWorkoutSuccess, actions.putWorkoutFailure)
}

function* deleteWorkoutSaga(action: IApiAction) {
    yield* apiSaga(action, actions.deleteWorkoutSuccess, actions.deleteWorkoutFailure)
}

function* workoutDeleteSuccess() {
    yield history.push(`/workouts`)
}

function* workoutPostFromSuccess(action: ISuccessAction<IWorkout>) {
    yield call(getWorkoutDataSaga)

    yield history.push(`/workouts/${action.payload.id}`)
}

export default [
    takeLatest(constants.WORKOUTS_GET_REQUEST, getWorkoutsSaga),
    takeLatest(constants.WORKOUTS_PUT_REQUEST, putWorkoutSaga),
    takeLatest(constants.WORKOUTS_POST_REQUEST, postWorkoutSaga),
    takeLatest(constants.WORKOUTS_POST_FROM_REQUEST, postWorkoutFromSaga),
    takeLatest(constants.WORKOUTS_DELETE_REQUEST, deleteWorkoutSaga),

    takeLatest(constants.WORKOUTS_DELETE_SUCCESS, workoutDeleteSuccess),
    takeLatest(constants.WORKOUTS_POST_FROM_SUCCESS, workoutPostFromSuccess)
]
