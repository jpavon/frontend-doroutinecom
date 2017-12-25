import { createSelector } from 'reselect'

import { liftExerciseSelector } from 'data/lifts/selectors'
import Set from 'data/sets/schema'

const round = (x) => Math.round(x * 10) / 10

const formatSet = (set, lift) => Set({
    ...set,
    rmPercentage: lift ? round(set.weight * 100 / lift.rm) : 0
})

export const setsSelector = (exerciseId) => createSelector(
    [
        (state) => state.sets.entities,
        liftExerciseSelector(exerciseId)
    ],
    (sets, lift) => sets
        .filter((set) => (set.exerciseId === exerciseId))
        .map((set) => formatSet(set, lift))
)
