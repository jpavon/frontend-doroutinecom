import { fetchUser } from 'data/user/actions'
import { fetchRoutines } from 'data/routines/actions'
import { fetchWorkouts } from 'data/workouts/actions'
import { fetchExercises } from 'data/exercises/actions'
import { fetchLifts } from 'data/lifts/actions'
import { fetchSets } from 'data/sets/actions'
import { showLoading, removeLoading } from 'data/ui/actions'

export const fetchAppData = () => (dispatch, getState) => {
    dispatch(showLoading())

    return Promise.all([
        dispatch(fetchUser()),
        dispatch(fetchRoutines()),
        dispatch(fetchWorkouts()),
        dispatch(fetchExercises()),
        dispatch(fetchLifts()),
        dispatch(fetchSets())
    ]).then(() => {
        dispatch(removeLoading())

        return Promise.resolve()
    })
}

export const fetchRoutinesData = () => (dispatch, getState) => {
    return Promise.all([
        dispatch(fetchWorkouts(true)),
        dispatch(fetchExercises(true)),
        dispatch(fetchLifts(true)),
        dispatch(fetchSets(true))
    ]).then(() => {
        return Promise.resolve()
    })
}

