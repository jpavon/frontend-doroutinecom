import { createSelector } from 'reselect'

import { ILift } from 'data/lifts/types'
import { IRootState } from 'data/types'
import { order } from 'data/utils'

export const liftSelector = createSelector(
    [(state: IRootState, id: number) => state.lifts.entities[id]],
    (lift): ILift | null => {
        return lift || null
    }
)

export const liftsSelector = createSelector(
    [(state: IRootState) => order(state.lifts)],
    (lifts): ILift[] => lifts
)

export const liftExerciseSelector = (exerciseId: number) =>
    createSelector(
        [
            (state: IRootState) => order(state.exercises),
            (state: IRootState) => order(state.lifts)
        ],
        (exercises, lifts): ILift | null => {
            const exercise = exercises[exerciseId]

            const lift = exercise && exercise.liftId && lifts[exercise.liftId]

            return lift || null
        }
    )
