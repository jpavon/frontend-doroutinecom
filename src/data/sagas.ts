// import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import { all, put, take, call } from 'redux-saga/effects'

import * as uiActions from 'data/ui/actions'
import * as userActions from 'data/user/actions'
import * as userConstants from 'data/user/constants'
// import { fetchRoutines } from 'data/routines/sagas'
// import { fetchWorkouts } from 'data/workouts/sagas'
// import { fetchExercises } from 'data/exercises/sagas'
// import { fetchLifts } from 'data/lifts/sagas'
// import { fetchSets } from 'data/sets/sagas'

/* tslint:disable:no-any */
export function* apiSaga(fn: any, successAction: any, errorAction: any, data: object | null = null) {
    try {
        const payload = yield call(fn, data)
        yield put(successAction(payload))
    } catch (error) {
        yield put(errorAction(error))
    }
}

export function* fetchAppData() {
        yield put(uiActions.showLoading())

        // try {
        // yield all([
        yield put(userActions.fetchUserRequest()),
            // call(fetchRotutines),
            // call(fetchWorkouts),
            // call(fetchExercises),
            // call(fetchLifts),
            // call(fetchSets)
        // ])

        // console.log(request)

        yield take(userConstants.USER_FETCH_SUCCESS)
        yield put(uiActions.removeLoading())
        // } catch (error) {
            // unauth ?
        // }

        // yield put(uiActions.removeLoading())
    // }

    // return Promise.all([
    //     dispatch(fetchUser()),
    //     dispatch(fetchRoutines()),
    //     dispatch(fetchWorkouts()),
    //     dispatch(fetchExercises()),
    //     dispatch(fetchLifts()),
    //     dispatch(fetchSets())
    // ]).then(([user]) => {
        // if (user && user.payload &&
        //     (user.payload.startOfWeek !== store.get('startOfWeek') ||
        //     user.payload.dateFormat !== store.get('dateFormat'))
        // ) {
        //     store.set('startOfWeek', user.payload.startOfWeek)
        //     store.set('dateFormat', user.payload.dateFormat)

        //     window.location.reload(true)
        // } else {
        //     // yield call(removeLoading)

        //     return Promise.resolve()
        // }
    // })
}

export default function* root() {
    yield all([
    ])
}
