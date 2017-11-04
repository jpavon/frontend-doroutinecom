import { createSelector } from 'reselect'
import moment from 'moment'

export const exercisesSelector = (workoutId) => createSelector(
    [
        (state) => state.exercises.entities
    ],
    (exercises) => exercises.length > 0 ? exercises.filter((exercise) => (exercise.workoutId === workoutId)) : []
)
