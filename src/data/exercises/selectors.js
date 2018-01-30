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

export const exercisesRoutineSelector = (routineId) => createSelector(
    [
        (state) => state.exercises.entities
    ],
    (exercises) => exercises
        .filter((exercise) => (exercise.routineId === routineId))
        .map((exercise) => formatExercise(exercise))
)

export const exercisesWorkoutSelector = (workoutId) => createSelector(
    [
        (state) => state.exercises.entities
    ],
    (exercises) => exercises
        .filter((exercise) => (exercise.workoutId === workoutId))
        .map((exercise) => formatExercise(exercise))
)
