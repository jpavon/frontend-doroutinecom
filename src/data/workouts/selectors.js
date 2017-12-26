import { createSelector } from 'reselect'

import Workout from 'data/workouts/schema'

const formatWorkout = (workout) => Workout({
    ...workout,
})

export const workoutsSelector = (routineId, blockId) => createSelector(
    [
        state => state.workouts.entities
    ],
    (workouts) => workouts
        .filter((workout) => (workout.blockId === blockId && workout.routineId === routineId))
        .map((workout) => formatWorkout(workout))
)

export const workoutSelector = (id) => createSelector(
    [
        (state) => state.workouts.entities
    ],
    (workouts) => formatWorkout(workouts.find((workout) => (workout.id === id)))
)

export const blocksWorkoutsSelector = (routineId) => createSelector(
    [
        (state) => state.workouts.entities
    ],
    (workouts) => {
        const max = Math.max(
            ...new Set(
                workouts
                    .filter((workout) => (workout.routineId === routineId))
                    .map((workout) => (workout.blockId))
            )
        )

        return max > 0 ? [...Array(max)].map((n, i) => i + 1) : [1]
    }
)
