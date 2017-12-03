import { createSelector } from 'reselect'

import { liftExerciseSelector } from 'data/lifts/selectors'
import Set from 'data/sets/schema'

const round = (x) => (Math.ceil(x/2.5) * 2.5 || 0)

const formatSet = (set, lift) => Set({
    ...set,
    weight: lift ? round(set.rmPercentage * lift.rm / 100) : 0
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
