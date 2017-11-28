import { createSelector } from 'reselect'

const formatLift = (lift) => ({
    ...lift
})

export const liftsSelector = (routineId) => createSelector(
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

export const exerciseLiftSelector = (exerciseId) => createSelector(
    [
        (state) => state.exercises.entities,
        (state) => state.lifts.entities,
    ],
    (exercises, lifts) => {
        const exercise = exercises.find((exercise) => (exercise.id === exerciseId))
        return formatLift(lifts.find((lift) => (lift.id === exercise.liftId)))
    }
)
