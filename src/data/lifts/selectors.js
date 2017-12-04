import { createSelector } from 'reselect'

import Lift from 'data/lifts/schema'

const formatLift = (lift) => Lift({
    ...lift
})

export const liftsRoutineSelector = (routineId) => createSelector(
    [
        (state) => state.lifts.entities
    ],
    (lifts) => lifts
        .filter((lift) => (lift.routineId === routineId))
        .map((lift) => formatLift(lift))
)

export const liftSelector = (id) => createSelector(
    [
        (state) => state.lifts.entities
    ],
    (lifts) => formatLift(lifts.find((lift) => (lift.id === id)))
)

export const liftExerciseSelector = (exerciseId) => createSelector(
    [
        (state) => state.exercises.entities,
        (state) => state.lifts.entities,
    ],
    (exercises, lifts) => {
        const exercise = exercises.find((exercise) => (exercise.id === exerciseId))
        const lift = lifts.find((lift) => (lift.id === exercise.liftId))
        return lift && Object.keys(lift).length > 0 && formatLift(lift)
    }
)
