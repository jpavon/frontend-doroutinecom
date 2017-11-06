import { createSelector } from 'reselect'
// import moment from 'moment'

export const setsSelector = (exerciseId) => createSelector(
    [
        (state) => state.sets.entities
    ],
    (sets) => sets.filter((set) => (set.exerciseId === exerciseId))
)
