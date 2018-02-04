import { createSelector } from 'reselect'

import Lift from 'data/lifts/schema'

const formatLift = (lift) => Lift({
    ...lift
})

export const liftSelector = (id) => createSelector(
    [
        (state) => state.lifts.entities
    ],
    (lifts) => {
        if (lifts.length > 0) {
            const lift = lifts.find((lift) => (lift.id === id))
            return lift ? formatLift(lift) : null
        }
        return null
    }
)

export const liftsSelector = createSelector(
    [
        (state) => state.lifts.entities
    ],
    (lifts) => lifts
        .map((lift) => formatLift(lift))
)

export const liftExerciseSelector = (exerciseId) => createSelector(
    [
        (state) => state.exercises.entities,
        (state) => state.lifts.entities,
    ],
    (exercises, lifts) => {
        const exercise = exercises.find((exercise) => (exercise.id === exerciseId))
        const lift = exercise && lifts.find((lift) => (lift.id === exercise.liftId))
        return lift && Object.keys(lift).length > 0 && formatLift(lift)
    }
)
