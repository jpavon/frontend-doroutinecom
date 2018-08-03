import { takeLatest } from 'redux-saga/effects'

import { ApiAction } from 'data/types'

import apiSaga from 'utils/apiSaga'
import constants from 'data/exercises/constants'
import * as actions from 'data/exercises/actions'

function* getExercisesSaga(action: ApiAction) {
    yield* apiSaga(
        action,
        actions.getExercisesSuccess,
        actions.getExercisesFailure
    )
}

function* postExerciseSaga(action: ApiAction) {
    yield* apiSaga(
        action,
        actions.postExerciseSuccess,
        actions.postExerciseFailure
    )
}

function* putExerciseSaga(action: ApiAction) {
    yield* apiSaga(
        action,
        actions.putExerciseSuccess,
        actions.putExerciseFailure
    )
}

function* deleteExerciseSaga(action: ApiAction) {
    yield* apiSaga(
        action,
        actions.deleteExerciseSuccess,
        actions.deleteExerciseFailure
    )
}

export default [
    takeLatest(constants.EXERCISES_GET_REQUEST, getExercisesSaga),
    takeLatest(constants.EXERCISES_PUT_REQUEST, putExerciseSaga),
    takeLatest(constants.EXERCISES_POST_REQUEST, postExerciseSaga),
    takeLatest(constants.EXERCISES_DELETE_REQUEST, deleteExerciseSaga)
]
