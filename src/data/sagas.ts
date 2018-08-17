import { delay } from 'redux-saga'
import { all, put, take, takeLatest, call, spawn } from 'redux-saga/effects'

import * as uiActions from 'data/ui/actions'
import * as userActions from 'data/user/actions'
import { globalConstants } from 'data/constants'
import userConstants from 'data/user/constants'
import routinesConstants from 'data/routines/constants'
import workoutsConstants from 'data/workouts/constants'
import exercisesConstants from 'data/exercises/constants'
import liftsConstants from 'data/lifts/constants'
import setsConstants from 'data/sets/constants'
import { getUser } from 'data/user/actions'
import { getRoutines } from 'data/routines/actions'
import { getWorkouts } from 'data/workouts/actions'
import { getExercises } from 'data/exercises/actions'
import { getLifts } from 'data/lifts/actions'
import { getSets } from 'data/sets/actions'
import { SERVER_ERROR } from 'utils/api'

export function* getAppDataSaga() {
    yield put(uiActions.showLoading())

    yield put(getUser())
    yield put(getRoutines())
    yield put(getWorkouts())
    yield put(getExercises())
    yield put(getLifts())
    yield put(getSets())

    yield all([
        take(userConstants.USER_GET_SUCCESS),
        take(routinesConstants.ROUTINES_GET_SUCCESS),
        take(workoutsConstants.WORKOUTS_GET_SUCCESS),
        take(exercisesConstants.EXERCISES_GET_SUCCESS),
        take(setsConstants.SETS_GET_SUCCESS),
        take(liftsConstants.LIFTS_GET_SUCCESS)
    ])

    yield put(uiActions.removeLoading())
}

export function* getWorkoutDataSaga() {
    yield put(getExercises())
    yield put(getSets())

    yield all([
        take(setsConstants.SETS_GET_SUCCESS),
        take(exercisesConstants.EXERCISES_GET_SUCCESS)
    ])
}

function* watchServerErrors() {
    while (true) {
        const { error } = yield take([
            userConstants.USER_GET_FAILURE,
            routinesConstants.ROUTINES_GET_FAILURE,
            workoutsConstants.WORKOUTS_GET_FAILURE,
            exercisesConstants.EXERCISES_GET_FAILURE,
            setsConstants.SETS_GET_FAILURE,
            liftsConstants.LIFTS_GET_FAILURE
        ])

        if (error && error.message === 'Unauthenticated.') {
            yield put(
                userActions.unauthUser(
                    'You need to log in for access to this page.'
                )
            )
        }

        if (error && error.message === SERVER_ERROR) {
            yield put(uiActions.removeLoading())
            yield put(
                uiActions.showAlert({
                    type: 'error',
                    message: 'Unexpected error'
                })
            )
        }

        yield call(delay, 1000)
    }
}

export default [
    takeLatest(globalConstants.GET_APP_DATA_REQUEST, getAppDataSaga),
    spawn(watchServerErrors)
]
