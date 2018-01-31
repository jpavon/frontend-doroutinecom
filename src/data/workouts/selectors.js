import { createSelector } from 'reselect'

import { formatDuration, formatDate } from 'utils/date'
import Workout from 'data/workouts/schema'

const formatWorkout = (workout) => Workout({
    ...workout,
    duration: workout.completedAt && formatDuration(workout.startedAt, workout.completedAt),
    day: workout.completedAt && formatDate(workout.completedAt)
})

export const workoutSelector = (id) => createSelector(
    [
        (state) => state.workouts.entities
    ],
    (workouts) => Object.keys(workouts).length > 0 ?
        formatWorkout(workouts.find((workout) => (workout.id === id))) :
        null
)

export const workoutsSelector = createSelector(
    [
        (state) => state.workouts.entities
    ],
    (workouts) => workouts
        .map((workout) => formatWorkout(workout))
        .sort((a, b) => (new Date(b.completedAt) - new Date(a.completedAt)))
)

export const completedWorkoutsSelector =  createSelector(
    [
        workoutsSelector
    ],
    (workouts) => workouts.filter((workout) => (workout.completedAt))
)

export const pendingWorkoutsSelector = createSelector(
    [
        workoutsSelector
    ],
    (workouts) => workouts.filter((workout) => (!workout.completedAt))
)

