import { createSelector } from 'reselect'

import { Lift } from 'data/lifts/types'
import { RootState } from 'data/types'
import { order } from 'data/utils'

export const liftSelector = createSelector(
    [(state: RootState, id: number) => state.lifts.entities[id]],
    (lift): Lift | null => {
        return lift || null
    }
)

export const liftsSelector = createSelector(
    [(state: RootState) => order(state.lifts)],
    (lifts): Lift[] => lifts
)

export const liftExerciseSelector = (exerciseId: number) =>
    createSelector(
        [
            (state: RootState) => order(state.exercises),
            (state: RootState) => order(state.lifts)
        ],
        (exercises, lifts): Lift | null => {
            const exercise = exercises[exerciseId]

            const lift = exercise && exercise.liftId && lifts[exercise.liftId]

            return lift || null
        }
    )
