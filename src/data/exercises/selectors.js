import { createSelector } from 'reselect'

const formatExercise = (exercise) => ({
    ...exercise
})

export const exercisesSelector = (workoutId) => createSelector(
    [
        (state) => state.exercises.entities
    ],
    (exercises) => exercises
        .filter((exercise) => (exercise.workoutId === workoutId))
        .map((exercise) => formatExercise(exercise))
)
