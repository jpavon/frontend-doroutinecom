import { createSelector } from 'reselect'

import { ILift, IFormatedLift } from 'data/lifts/types'
import { IRootState } from 'data/types'
import { order } from 'data/utils'

const formatLift = (lift: ILift): IFormatedLift => ({
    ...lift
})

export const liftSelector = createSelector(
    [(state: IRootState, id: number) => state.lifts.entities[id]],
    (lift) => {
        return formatLift(lift)
    }
)

export const liftsSelector = createSelector(
    [(state: IRootState) => order(state.lifts)],
    (lifts): IFormatedLift[] =>
        Object.values(lifts).map((lift) => formatLift(lift))
)

export const liftExerciseSelector = (exerciseId: number) =>
    createSelector(
        [
            (state: IRootState) => order(state.exercises),
            (state: IRootState) => order(state.lifts)
        ],
        (exercises, lifts): IFormatedLift | null => {
            const exercise = exercises[exerciseId]

            const lift = exercise && exercise.liftId && lifts[exercise.liftId]

            return lift ? formatLift(lift) : null
        }
    )
