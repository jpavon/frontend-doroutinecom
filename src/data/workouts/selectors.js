import { createSelector } from 'reselect'

import Workout from 'data/workouts/schema'

const formatWorkout = (workout) => Workout({
    ...workout,
})

export const workoutsSelector = (routineId) => createSelector(
    [
        state => state.workouts.entities
    ],
    (workouts) => workouts
        .filter((workout) => (workout.routineId === routineId))
        .map((workout) => formatWorkout(workout))
)

export const workoutSelector = (id) => createSelector(
    [
        (state) => state.workouts.entities
    ],
    (workouts) => Object.keys(workouts).length > 0 ?
        formatWorkout(workouts.find((workout) => (workout.id === id))) :
        null
)

export const workoutsRoutineSelector = (routineId) => createSelector(
    [
        (state) => state.workouts.entities
    ],
    (workouts) => workouts.filter((workout) => (workout.routineId === routineId))
)

export const templateWorkoutsSelector = (routineId) => createSelector(
    [
        workoutsRoutineSelector(routineId)
    ],
    (workouts) => workouts.filter((workout) => workout.isTemplate)
)

export const completedWorkoutsSelector = (routineId) => createSelector(
    [
        workoutsRoutineSelector(routineId)
    ],
    (workouts) => workouts.filter((workout) => (workout.isCompleted))
)

export const pendingWorkoutsSelector = (routineId) => createSelector(
    [
        workoutsRoutineSelector(routineId)
    ],
    (workouts) => workouts.filter((workout) => (workout.isPending))
)

