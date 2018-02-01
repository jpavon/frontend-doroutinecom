import { createSelector } from 'reselect'

import { liftExerciseSelector } from 'data/lifts/selectors'
import Set from 'data/sets/schema'

const formatSet = (set) => Set({
    ...set,
})

export const setsSelector = createSelector(
    [
        (state) => state.sets.entities,
    ],
    (sets) => sets
        .map((set) => formatSet(set))
)

export const setsExerciseSelector = (exerciseId) => createSelector(
    [
        setsSelector
    ],
    (sets) => sets
        .filter((set) => (set.exerciseId === exerciseId))
)
