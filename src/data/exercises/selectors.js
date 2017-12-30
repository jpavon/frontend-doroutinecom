import { createSelector } from 'reselect'

import Exercise from 'data/exercises/schema'

const formatExercise = (exercise) => Exercise({
    ...exercise
})

export const exercisesSelector = (workoutId) => createSelector(
    [
        (state) => state.exercises.entities
    ],
    (exercises) => exercises
        .filter((exercise) => (exercise.workoutId === workoutId))
        .sort((a, b) => (a.order - b.order))
        .map((exercise) => formatExercise(exercise))
)
