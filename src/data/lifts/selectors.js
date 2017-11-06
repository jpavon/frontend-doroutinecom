import { createSelector } from 'reselect'
// import moment from 'moment'

export const liftSelector = (exerciseId) => createSelector(
    [
        (state) => state.lifts.entities,
        (state) => state.exercises.entities
    ],
    (lifts, exercises) => lifts.filter((set) => (set.exerciseId === exerciseId))
)
