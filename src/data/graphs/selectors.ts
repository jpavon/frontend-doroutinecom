import { createSelector } from 'reselect'

import { IRootState } from 'data/types'
import { IWorkout } from 'data/workouts/types'

import moment from 'utils/moment'
import momentRange from 'utils/momentRange'
import { dayMonthFormat, dateFormat } from 'utils/date'
import { completedWorkoutsSelector } from 'data/workouts/selectors'
import { completedExercisesLiftSelector } from 'data/exercises/selectors'
import { setsSelector } from 'data/sets/selectors'
import { formatTopSets } from 'data/sets/selectors'

const weeks = [0, 1, 2, 3, 4].map((id) => ({
    startWeek: moment()
        .subtract(id, 'weeks')
        .startOf('week'),
    endWeek: moment()
        .subtract(id, 'weeks')
        .endOf('week')
}))

const ranges = weeks.map((week) => ({
    range: momentRange().range(week.startWeek, week.endWeek)
}))

const getWorkoutsDataset = (workouts: IWorkout[]) => {
    const dataset = [0, 0, 0, 0, 0]

    workouts.forEach((workout) => {
        ranges.forEach((item, i) => {
            if (
                workout.completedAt &&
                item.range.contains(moment(workout.completedAt))
            ) {
                dataset[i] = dataset[i] + 1
            }
        })
    })

    if (Math.max(...dataset) === 0) {
        return []
    }

    return dataset
}

export interface WeeklyWorkoutGraph {
    week: string
    completed: number
}

export const weeklyWorkoutsSelector = createSelector(
    [completedWorkoutsSelector],
    (workouts): WeeklyWorkoutGraph[] => {
        const dataset = getWorkoutsDataset(workouts)

        return weeks
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
            (state: IRootState) => state.user.entity
        ],
        (exercises, sets, workouts, user): LiftSetsGraph[] => {
            const topSets = formatTopSets(exercises, sets, workouts, null).sort(
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
