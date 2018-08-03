import { createSelector } from 'reselect'

import { Exercise } from 'data/exercises/types'
import { RootState } from 'data/types'

import { completedWorkoutsSelector } from 'data/workouts/selectors'
import { liftSelector } from 'data/lifts/selectors'
import { order } from 'data/utils'

export const exercisesRoutineSelector = (routineId: number) =>
    createSelector(
        [(state: RootState) => order(state.exercises)],
        (exercises): Exercise[] =>
            exercises.filter((exercise) => exercise.routineId === routineId)
    )

export const exercisesWorkoutSelector = (workoutId: number) =>
    createSelector(
        [(state: RootState) => state.exercises.entities],
        (exercises): Exercise[] =>
            Object.values(exercises).filter(
                (exercise) => exercise.workoutId === workoutId
            )
    )

export const completedExercisesLiftSelector = (liftId: number) =>
    createSelector(
        [
            (state: RootState) => state.exercises.entities,
            completedWorkoutsSelector,
            (state) => liftSelector(state, liftId)
        ],
        (exercises, workouts, lift): Exercise[] => {
            const completedWorkoutsIds = workouts.map((workout) => workout.id)
            const completedExercises = Object.values(exercises).filter(
                (exercise) =>
                    exercise.workoutId &&
                    completedWorkoutsIds.includes(exercise.workoutId)
            )

            return completedExercises.filter(
                (exercise) => lift && exercise.liftId === lift.id
            )
        }
    )

export const completedExercisesSelector = createSelector(
    [(state: RootState) => state.exercises.entities, completedWorkoutsSelector],
    (exercises, workouts): Exercise[] => {
        const completedWorkoutsIds = workouts.map((workout) => workout.id)

        return Object.values(exercises).filter(
            (exercise) =>
                exercise.workoutId &&
                completedWorkoutsIds.includes(exercise.workoutId)
        )
    }
)
