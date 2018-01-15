import { createSelector } from 'reselect'
import isFinite from 'lodash/isFinite'

import { routineByIdSelector } from 'data/routines/selectors'
import { liftExerciseSelector } from 'data/lifts/selectors'
import Set from 'data/sets/schema'

const round = (x) => {
    const number = Math.round(x * 10) / 10
    return isFinite(number) ? number : 0
}

const formatSet = (set, lift, routine) => Set({
    ...set,
    tmPercentage: (lift && routine) ? round(set.weight * 100 / (lift.rm*routine.trainingMax/100)) : 0
})

export const setsSelector = (exerciseId, routineId) => createSelector(
    [
        (state) => state.sets.entities,
        liftExerciseSelector(exerciseId),
        routineByIdSelector(routineId)
    ],
    (sets, lift, routine) => sets
        .filter((set) => (set.exerciseId === exerciseId))
        .map((set) => formatSet(set, lift, routine))
)
