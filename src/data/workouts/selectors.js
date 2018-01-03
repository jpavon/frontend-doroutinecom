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

export const workoutsRoutineSelector = (routineId) => createSelector(
    [
        (state) => state.workouts.entities
    ],
    (workouts) => workouts.filter((workout) => (workout.routineId === routineId))
)

export const blocksSelector = (routineId) => createSelector(
    workoutsRoutineSelector(routineId),
    (workouts) => {
        const max = Math.max(
            ...new Set(
                workouts.map((workout) => (workout.blockId))
            )
        )

        return max > 0 ? [...Array(max)].map((n, i) => i + 1) : [1]
    }
)

export const completedBlocks = (routineId) => createSelector(
    [
        workoutsRoutineSelector(routineId),
        blocksSelector(routineId)
    ],
    (workouts, blocks) => {
        return blocks.map((id) => {
            const routineWorkoutsBlocks = workouts.filter((workout) => (workout.blockId === id))
            return (routineWorkoutsBlocks.length > 0 && routineWorkoutsBlocks.filter((workout) => (!workout.isDone)).length < 1) ? 1 : 0
        })
    }
)
