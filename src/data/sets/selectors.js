import { createSelector } from 'reselect'

import { liftExerciseSelector } from 'data/lifts/selectors'
import Set from 'data/sets/schema'

const formatSet = (set, lift) => Set({
    ...set,
})

export const setsSelector = (exerciseId) => createSelector(
    [
        (state) => state.sets.entities,
    ],
    (sets) => sets
        .filter((set) => (set.exerciseId === exerciseId))
        .map((set) => formatSet(set))
)
