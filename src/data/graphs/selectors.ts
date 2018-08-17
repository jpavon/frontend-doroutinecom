import { createSelector } from 'reselect'

import { RootState } from 'data/types'

import { graphWeeklyData, graphWeeklyRanges } from 'utils/date'
import { completedWorkoutsSelector } from 'data/workouts/selectors'
import { completedExercisesLiftSelector } from 'data/exercises/selectors'
import { setsSelector } from 'data/sets/selectors'
import { formatTopSets } from 'data/sets/selectors'
import {
    dayMonthFormatSelector,
    dateFormatSelector,
    userMomentSelector
} from '../user/selectors'

export interface WeeklyWorkoutGraph {
    week: string
    completed: number
}

export const weeklyWorkoutsSelector = createSelector(
    [completedWorkoutsSelector, dayMonthFormatSelector, userMomentSelector],
    (completedWorkouts, dayMonthFormat, userMoment): WeeklyWorkoutGraph[] => {
        const dataset = graphWeeklyData(
            completedWorkouts.map((w) => w.completedAt!),
            userMoment
        )

        return graphWeeklyRanges(userMoment)
            .map((week, index) => ({
                week: `${week.startWeek.format(
                    dayMonthFormat
                )} ${week.endWeek.format(dayMonthFormat)}`,
                completed: dataset[index] || 0
            }))
            .reverse()
    }
)

export interface LiftSetsGraph {
    rm: number
    day: string
    set: string
}

export const liftSetsGraphSelector = (liftId: number) =>
    createSelector(
        [
            completedExercisesLiftSelector(liftId),
            setsSelector,
            completedWorkoutsSelector,
            (state: RootState) => state.user.entity,
            dateFormatSelector
        ],
        (exercises, sets, workouts, user, dateFormat): LiftSetsGraph[] => {
            const topSets = formatTopSets(
                exercises,
                sets,
                workouts,
                null,
                dateFormat
            ).sort(
                (a, b) =>
                    Number(a.completeAtMoment) - Number(b.completeAtMoment)
            )

            return topSets.map((set) => ({
                rm: set.rm,
                day: set.completeAtMoment.format(dateFormat),
                set: `${set.reps}x${set.weight}${user!.weightMeasure}`
            }))
        }
    )
