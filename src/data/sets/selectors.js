import { createSelector } from 'reselect'

const formatSet = (set) => ({
    ...set
})

export const setsSelector = (exerciseId) => createSelector(
    [
        (state) => state.sets.entities
    ],
    (sets) => sets
        .filter((set) => (set.exerciseId === exerciseId))
        .map((set) => formatSet(set))
)
