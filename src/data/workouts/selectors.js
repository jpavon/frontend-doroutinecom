import { createSelector } from 'reselect'

import Workout from 'data/workouts/schema'

const formatWorkout = (workout) => Workout({
    ...workout,
})

export const workoutsSelector = (routineId, weekId) => createSelector(
    [
        state => state.workouts.entities
    ],
    (workouts) => workouts
        .filter((workout) => (workout.weekId === weekId && workout.routineId === routineId))
        .map((workout) => formatWorkout(workout))
)

export const workoutSelector = (id) => createSelector(
    [
        (state) => state.workouts.entities
    ],
    (workouts) => formatWorkout(workouts.find((workout) => (workout.id === id)))
)

export const workoutsRoutineSelector = (routineId) => createSelector(
    [
        (state) => state.workouts.entities
    ],
    (workouts) => workouts.filter((workout) => (workout.routineId === routineId))
)

export const weeksSelector = (routineId) => createSelector(
    workoutsRoutineSelector(routineId),
    (workouts) => {
        const max = Math.max(
            ...new Set(
                workouts.map((workout) => (workout.weekId))
            )
        )

        return max > 0 ? [...Array(max)].map((n, i) => i + 1) : [1]
    }
)

export const completedWeeks = (routineId) => createSelector(
    [
        workoutsRoutineSelector(routineId),
        weeksSelector(routineId)
    ],
    (workouts, weeks) => {
        return weeks.map((id) => {
            const routineWorkoutsWeeks = workouts.filter((workout) => (workout.weekId === id))
            return (routineWorkoutsWeeks.length > 0 && routineWorkoutsWeeks.filter((workout) => (!workout.isCompleted)).length < 1) ? 1 : 0
        })
    }
)
