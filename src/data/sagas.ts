import { all, put, take } from 'redux-saga/effects'

import * as uiActions from 'data/ui/actions'
import { getUser } from 'data/user/actions'
import * as userConstants from 'data/user/constants'
// import { fetchRoutines } from 'data/routines/actions'
// import { fetchWorkouts } from 'data/workouts/actions'
// import { fetchExercises } from 'data/exercises/actions'
// import { fetchLifts } from 'data/lifts/actions'
// import { fetchSets } from 'data/sets/actions'

export function* getAppDataSaga() {
        yield put(uiActions.showLoading())

        // try {
        // yield all([
        yield put(getUser())
        // yield put(fetchRoutines())
        // yield put(fetchWorkouts())
        // yield put(fetchExercises())
        // yield put(fetchLifts())
        // yield put(fetchSets())
        // ])

        // console.log(request)

        const [user] = yield all([
            take(userConstants.USER_GET_SUCCESS)
        ])

        console.log(user)

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

export default []
