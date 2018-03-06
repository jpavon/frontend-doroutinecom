import { takeLatest, take, spawn, put } from 'redux-saga/effects'

import { IApiAction } from 'data/types'

import history from 'utils/history'
import apiSaga from 'utils/apiSaga'
import * as constants from 'data/routines/constants'
import * as actions from 'data/routines/actions'
import * as workoutsActions from 'data/workouts/actions'

function* getRoutinesSaga(action: IApiAction) {
    yield* apiSaga(action, actions.getRoutinesSuccess, actions.getRoutinesFailure)
}

function* postRoutineSaga(action: IApiAction) {
    yield* apiSaga(action, actions.postRoutineSuccess, actions.postRoutineFailure)
}

function* putRoutineSaga(action: IApiAction) {
    yield* apiSaga(action, actions.putRoutineSuccess, actions.putRoutineFailure)
}

function* deleteRoutineSaga(action: IApiAction) {
    yield* apiSaga(action, actions.deleteRoutineSuccess, actions.deleteRoutineFailure)
}

function* watchRoutinePostSuccess() {
    while (true) {
        const { payload } = yield take(constants.ROUTINES_POST_SUCCESS)

        yield history.push(`/routines/${payload.id}`)
    }
}

function* watchRoutineDeleteSuccess() {
    while (true) {
        yield take(constants.ROUTINES_DELETE_SUCCESS)

        yield history.push('/routines')

        yield put(workoutsActions.getWorkouts())
    }
}

export default [
    takeLatest(constants.ROUTINES_GET_REQUEST, getRoutinesSaga),
    takeLatest(constants.ROUTINES_PUT_REQUEST, putRoutineSaga),
    takeLatest(constants.ROUTINES_POST_REQUEST, postRoutineSaga),
    takeLatest(constants.ROUTINES_DELETE_REQUEST, deleteRoutineSaga),
    spawn(watchRoutinePostSuccess),
    spawn(watchRoutineDeleteSuccess)
]
