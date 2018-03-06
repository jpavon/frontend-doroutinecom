import store from 'store'

import { getUser } from 'data/user/actions'
import { fetchRoutines } from 'data/routines/actions'
import { getWorkouts } from 'data/workouts/actions'
import { fetchExercises } from 'data/exercises/actions'
import { fetchLifts } from 'data/lifts/actions'
import { getSets } from 'data/sets/actions'
import { showLoading, removeLoading } from 'data/ui/actions'

// import * as constants from 'data/constants'
// import * as uiActions from 'data/ui/actions'

// export function *fetchAllData() {
//     dispatch(showLoading())

//     return Promise.all([
//         dispatch(fetchUser()),
//         dispatch(fetchRoutines()),
//         dispatch(getWorkouts()),
//         dispatch(fetchExercises()),
//         dispatch(fetchLifts()),
//         dispatch(getSets())
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

export const fetchAppData = () => (dispatch, getState) => {
    dispatch(showLoading())

    return Promise.all([
        dispatch(getUser()),
        dispatch(fetchRoutines()),
        dispatch(getWorkouts()),
        dispatch(fetchExercises()),
        dispatch(fetchLifts()),
        dispatch(getSets())
    ]).then(([user]) => {
        if (user && user.payload &&
            (user.payload.startOfWeek !== store.get('startOfWeek') ||
            user.payload.dateFormat !== store.get('dateFormat'))
        ) {
            store.set('startOfWeek', user.payload.startOfWeek)
            store.set('dateFormat', user.payload.dateFormat)

            window.location.reload(true)
        } else {
            dispatch(removeLoading())

            return Promise.resolve()
        }
    })
}

export const fetchWorkoutsData = () => (dispatch, getState) => {
    return Promise.all([
        dispatch(fetchExercises(true)),
        dispatch(getSets())
    ]).then(() => {
        return Promise.resolve()
    })
}

