import { createSelector } from 'reselect'

const formatWorkout = (workout) => ({
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
        return [...new Set(workouts
            .filter((workout) => (workout.routineId === routineId))
            .map((workout) => (workout.blockId)))].filter(Number)
    }
)
