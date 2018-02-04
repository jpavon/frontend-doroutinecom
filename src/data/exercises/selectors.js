import { createSelector } from 'reselect'

import Exercise from 'data/exercises/schema'
import { completedWorkoutsSelector } from 'data/workouts/selectors'
import { liftSelector } from 'data/lifts/selectors'

const formatExercise = (exercise) => Exercise({
    ...exercise
})

// export const exercisesSelector = (workoutId) => createSelector(
//     [
//         (state) => state.exercises.entities
//     ],
//     (exercises) => exercises
//         .filter((exercise) => (exercise.workoutId === workoutId))
//         .sort((a, b) => (a.order - b.order))
//         .map((exercise) => formatExercise(exercise))
// )

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

export const completedExercisesLiftSelector = (liftId) => createSelector(
    [
        (state) => state.exercises.entities,
        completedWorkoutsSelector,
        liftSelector(liftId)
    ],
    (exercises, workouts, lift) => {
        const completedWorkoutsIds = workouts.map((workout) => workout.id)
        const completedExercises = exercises.filter((exercise) => completedWorkoutsIds.includes(exercise.workoutId))

        return completedExercises.filter((exercise) => exercise.liftId === lift.id)
    }
)

export const completedExercisesSelector = createSelector(
    [
        (state) => state.exercises.entities,
        completedWorkoutsSelector
    ],
    (exercises, workouts) => {
        const completedWorkoutsIds = workouts.map((workout) => workout.id)

        return exercises.filter((exercise) => completedWorkoutsIds.includes(exercise.workoutId))
    }
)
