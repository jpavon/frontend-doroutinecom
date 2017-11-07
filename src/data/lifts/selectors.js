import { createSelector } from 'reselect'

const formatLift = (lift) => ({
    ...lift
})

export const liftsSelector = createSelector(
    [
        (state) => state.lifts.entities
    ],
    (lifts) => lifts.map((lift) => formatLift(lift))
)

export const liftSelector = (id) => createSelector(
    [
        (state) => state.lifts.entities
    ],
    (lifts) => formatLift(lifts.find((lift) => (lift.id === id)))
)
