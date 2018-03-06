import { all, put, take, takeLatest, call, spawn } from 'redux-saga/effects'
import * as store from 'store'

import { IUser } from 'data/user/types'

import * as actions from 'data/actions'
import * as uiActions from 'data/ui/actions'
import * as userActions from 'data/user/actions'
import * as constants from 'data/constants'
import * as userConstants from 'data/user/constants'
import * as routinesConstants from 'data/routines/constants'
import * as workoutsConstants from 'data/workouts/constants'
import * as exercisesConstants from 'data/exercises/constants'
import * as liftsConstants from 'data/lifts/constants'
import * as setsConstants from 'data/sets/constants'
import { getUser } from 'data/user/actions'
import { getRoutines } from 'data/routines/actions'
import { getWorkouts } from 'data/workouts/actions'
import { getExercises } from 'data/exercises/actions'
import { getLifts } from 'data/lifts/actions'
import { getSets } from 'data/sets/actions'

export function* getAppDataSaga() {
    yield put(uiActions.showLoading())

    yield put(getUser())
    yield put(getRoutines())
    yield put(getWorkouts())
    yield put(getExercises())
    yield put(getLifts())
    yield put(getSets())

    const [user] = yield all([
        take(userConstants.USER_GET_SUCCESS),
        take(routinesConstants.ROUTINES_GET_SUCCESS),
        take(workoutsConstants.WORKOUTS_GET_SUCCESS),
        take(exercisesConstants.EXERCISES_GET_SUCCESS),
        take(setsConstants.SETS_GET_SUCCESS),
        take(liftsConstants.LIFTS_GET_SUCCESS)
    ])

    yield call(userSettingsCheck, user.payload)

    yield put(uiActions.removeLoading())
}

export function* getWorkoutDataSaga() {
    yield put(getExercises())
    yield put(getSets())

    yield all([
        yield take(setsConstants.SETS_GET_SUCCESS),
        yield take(exercisesConstants.EXERCISES_GET_SUCCESS)
    ])

    yield put(actions.getWorkoutsDataSuccess())
}

function* watchUserUnauth() {
    while (true) {
        yield take(userConstants.USER_GET_FAILURE)

        yield put(userActions.unauthUser('You need to log in for access to this page.'))
    }
}

function userSettingsCheck(user: IUser) {
    if (
        user.startOfWeek !== store.get('startOfWeek') ||
        user.dateFormat !== store.get('dateFormat')
    ) {
        store.set('startOfWeek', user.startOfWeek)
        store.set('dateFormat', user.dateFormat)

        window.location.reload(true)
    }
}

export default [
    takeLatest(constants.GET_APP_DATA_REQUEST, getAppDataSaga),
    takeLatest(constants.GET_WORKOUTS_DATA_REQUEST, getWorkoutDataSaga),
    spawn(watchUserUnauth)
]
