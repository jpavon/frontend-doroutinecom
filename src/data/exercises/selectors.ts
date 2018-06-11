import { createSelector } from 'reselect'

import { IExercise } from 'data/exercises/types'
import { IRootState } from 'data/types'

import { completedWorkoutsSelector } from 'data/workouts/selectors'
import { liftSelector } from 'data/lifts/selectors'
import { order } from 'data/utils'

export const exercisesRoutineSelector = (routineId: number) =>
    createSelector(
        [(state: IRootState) => order(state.exercises)],
        (exercises): IExercise[] =>
            exercises.filter((exercise) => exercise.routineId === routineId)
    )

export const exercisesWorkoutSelector = (workoutId: number) =>
    createSelector(
        [(state: IRootState) => state.exercises.entities],
        (exercises): IExercise[] =>
            Object.values(exercises).filter(
                (exercise) => exercise.workoutId === workoutId
            )
    )

export const completedExercisesLiftSelector = (liftId: number) =>
    createSelector(
        [
            (state: IRootState) => state.exercises.entities,
            completedWorkoutsSelector,
            (state) => liftSelector(state, liftId)
        ],
        (exercises, workouts, lift): IExercise[] => {
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
    [
        (state: IRootState) => state.exercises.entities,
        completedWorkoutsSelector
    ],
    (exercises, workouts): IExercise[] => {
        const completedWorkoutsIds = workouts.map((workout) => workout.id)

        return Object.values(exercises).filter(
            (exercise) =>
                exercise.workoutId &&
                completedWorkoutsIds.includes(exercise.workoutId)
        )
    }
)
