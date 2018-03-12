import { createSelector } from 'reselect'

import { ILift, IFormatedLift } from 'data/lifts/types'
import { IRootState } from 'data/types'

const formatLift = (lift: ILift): IFormatedLift => ({
    ...lift
})

export const liftSelector = (id: number) => createSelector(
    [
        (state: IRootState) => state.lifts.entities
    ],
    (lifts): IFormatedLift | null => {
        if (lifts.length > 0) {
            const lift = lifts.find((lift) => (lift.id === id))
            return lift ? formatLift(lift) : null
        }
        return null
    }
)

export const liftsSelector = createSelector(
    [
        (state: IRootState) => state.lifts.entities
    ],
    (lifts): IFormatedLift[] => lifts
        .map((lift) => formatLift(lift))
)

export const liftExerciseSelector = (exerciseId: number) => createSelector(
    [
        (state: IRootState) => state.exercises.entities,
        (state: IRootState) => state.lifts.entities,
    ],
    (exercises, lifts): IFormatedLift | null => {
        const exercise = exercises.find((exercise) => (exercise.id === exerciseId))
        const lift = exercise && lifts.find((lift) => (lift.id === exercise.liftId))
        return (lift && Object.keys(lift).length > 0) ? formatLift(lift) : null
    }
)
