// import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import { all, put } from 'redux-saga/effects'

import * as uiActions from 'data/ui/actions'
import * as userActions from 'data/user/actions'
// import { fetchRoutines } from 'data/routines/sagas'
// import { fetchWorkouts } from 'data/workouts/sagas'
// import { fetchExercises } from 'data/exercises/sagas'
// import { fetchLifts } from 'data/lifts/sagas'
// import { fetchSets } from 'data/sets/sagas'

// export function *apiSaga(fn: any, args: any, successAction: any, errorAction: any) {
//     try {
//         const { response } = yield call(fn, args)
//         yield put(successAction(response))
//     } catch(error) {
//         yield put(errorAction(error))
//     }
// }

export function *fetchAppData() {
    // while (true) {
        yield put(uiActions.showLoading())

        // try {
        // yield all([
        yield put(userActions.fetchUserAction.request()),
            // call(fetchRoutines),
            // call(fetchWorkouts),
            // call(fetchExercises),
            // call(fetchLifts),
            // call(fetchSets)
        // ])

        // console.log(request)

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
