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

export const setSelector = (id) => createSelector(
    [
        (state) => state.sets.entities
    ],
    (sets) => formatSet(sets.find((set) => (set.id === id)))
)
