import store from 'store'

import { getUser } from 'data/user/actions'
import { getRoutines } from 'data/routines/actions'
import { getWorkouts } from 'data/workouts/actions'
import { getExercises } from 'data/exercises/actions'
import { getLifts } from 'data/lifts/actions'
import { getSets } from 'data/sets/actions'
import { showLoading, removeLoading } from 'data/ui/actions'

// import * as constants from 'data/constants'
// import * as uiActions from 'data/ui/actions'

// export function *fetchAllData() {
//     dispatch(showLoading())

//     return Promise.all([
//         dispatch(fetchUser()),
//         dispatch(getRoutines()),
//         dispatch(getWorkouts()),
//         dispatch(getExercises()),
//         dispatch(getLifts()),
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
        dispatch(getRoutines()),
        dispatch(getWorkouts()),
        dispatch(getExercises()),
        dispatch(getLifts()),
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
        dispatch(getExercises()),
        dispatch(getSets())
    ]).then(() => {
        return Promise.resolve()
    })
}

