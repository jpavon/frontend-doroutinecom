import { createSelector } from 'reselect'

import { IRootState } from 'data/types'
import { ILiftsGraph, IWorkoutsGraph } from 'data/graphs/types'
import { IFormatedWorkout } from 'data/workouts/types'

import moment from 'utils/moment'
import momentRange from 'utils/momentRange'
import { dayMonthFormat, dateFormat } from 'utils/date'
import { completedWorkoutsSelector } from 'data/workouts/selectors'
import { completedExercisesLiftSelector } from 'data/exercises/selectors'
import { setsSelector } from 'data/sets/selectors'
import { formatTopSets } from 'data/sets/selectors'

const weeks = [0, 1, 2, 3, 4].map((id) => ({
    startWeek: moment().subtract(id, 'weeks').startOf('week'),
    endWeek: moment().subtract(id, 'weeks').endOf('week')
}))

const ranges = weeks.map((week) => ({
    range: momentRange().range(week.startWeek, week.endWeek)
}))

const getWorkoutsDataset = (workouts: IFormatedWorkout[]) => {
    const dataset = [0, 0, 0, 0, 0]

    workouts.forEach((workout) => {
        ranges.forEach((item, i) => {
            if (workout.completedAt && item.range.contains(moment(workout.completedAt))) {
                dataset[i] = dataset[i] + 1
            }
        })
    })

    if (Math.max(...dataset) === 0) { return [] }

    return dataset
}

export const workoutsGraphDataSelector = createSelector(
    [
        completedWorkoutsSelector
    ],
    (workouts): IWorkoutsGraph => {
        const dataset = getWorkoutsDataset(workouts).reverse()

        const labels = weeks.map((week) => {
            return `${week.startWeek.format(dayMonthFormat)} ${week.endWeek.format(dayMonthFormat)}`
        }).reverse()

        return {
            labels,
            dataset,
            datasetMax: Math.max(...dataset)
        }
    }
)

export const liftGraphDataSelector = (liftId: number) => createSelector(
    [
        completedExercisesLiftSelector(liftId),
        setsSelector,
        completedWorkoutsSelector,
        (state: IRootState) => state.user.entity
    ],
    (exercises, sets, workouts, user): ILiftsGraph => {
        const topSets = formatTopSets(exercises, sets, workouts, null)
            .sort((a, b) => (+a.moment - +b.moment))

        const dataset = topSets.map((set) => set.rm)
        const labels = topSets.map((set) => set.moment.format(dateFormat))
        const reps = topSets.map((set) => set.reps)
        const weight = topSets.map((set) => set.weight)

        return {
            labels,
            dataset,
            datasetMax: dataset.length > 0 ? Math.max(...dataset) : 0,
            datasetMin: dataset.length > 0 ? Math.min(...dataset) : 0,
            meta: {
                reps,
                weight,
                weightMeasure: user && user.weightMeasure
            }
        }
    }
)
