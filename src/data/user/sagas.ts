// import { delay } from 'redux-saga';
import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import * as store from 'store'

import { IApiAction } from 'data/types'

import api from 'utils/api'
import * as constants from 'data/user/constants'
import * as actions from 'data/user/actions'
import { fetchAppData } from 'data/globals'

// import { fetchUser } from 'data/user/actions'
// import { fetchRoutines } from 'data/routines/actions'
// import { fetchWorkouts } from 'data/workouts/actions'
// import { fetchExercises } from 'data/exercises/actions'
// import { fetchLifts } from 'data/lifts/actions'
// import { fetchSets } from 'data/sets/actions'
// import { showLoading, removeLoading } from 'data/ui/actions'

export function* login(action: IApiAction) {
    try {
        const payload = yield call(api, action.options)

        yield put(actions.login.success(payload))

        yield put({ type: constants.USER_AUTH, token: payload.token })
    } catch (error) {
        yield put(actions.login.failure(error))
    }
}

// export const *fetchAppData = () => {
//     dispatch(showLoading())

//     return Promise.all([
//         dispatch(fetchUser()),
//         dispatch(fetchRoutines()),
//         dispatch(fetchWorkouts()),
//         dispatch(fetchExercises()),
//         dispatch(fetchLifts()),
//         dispatch(fetchSets())
//     ]).then(([user]) => {
//         if (user && user.payload &&
//             (user.payload.startOfWeek !== store.get('startOfWeek') ||
//             user.payload.dateFormat !== store.get('dateFormat'))
//         ) {
//             store.set('startOfWeek', user.payload.startOfWeek)
//             store.set('dateFormat', user.payload.dateFormat)

//             window.location.reload(true)
//         } else {
//             dispatch(removeLoading())

//             return Promise.resolve()
//         }
//     })
// }

export function* authUser(action: {type: string, token: string}) {
    store.set('token', action.token)

    yield call(fetchAppData)
}

export default function* root() {
    yield all([
        takeLatest(constants.USER_LOGIN_REQUEST, login),
        takeEvery(constants.USER_AUTH, authUser),
    ])
}
