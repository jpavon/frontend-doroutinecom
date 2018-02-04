import { createSelector } from 'reselect'

import moment from 'utils/moment'
import { localeDayMonthFormat, localeDateFormat } from 'utils/date'
import { completedWorkoutsSelector } from 'data/workouts/selectors'
import { completedExercisesLiftSelector } from 'data/exercises/selectors'
import { setsSelector } from 'data/sets/selectors'
import { formatTopSets } from 'data/sets/selectors'

const weeks = [0, 1, 2, 3, 4].map((id) => ({
    startWeek: moment().subtract(id, 'weeks').startOf('week'),
    endWeek: moment().subtract(id, 'weeks').endOf('week')
}))

const ranges = weeks.map((week) => ({
    range: moment().range(week.startWeek, week.endWeek)
}))

const getWorkoutsDataset = (workouts) => {
    const datasets = [0, 0, 0, 0, 0]

    workouts.forEach((workout) => {
        ranges.forEach((item, i) => {
            if (item.range.contains(moment(workout.completedAt))) {
                datasets[i] = datasets[i] + 1
            }
        })
    })

    return datasets
}

export const workoutsGraphDataSelector = createSelector(
    [
        completedWorkoutsSelector
    ],
    (workouts) => {
        const dataset = getWorkoutsDataset(workouts).reverse()

        const labels = weeks.map((week) => {
            return `${week.startWeek.format(localeDayMonthFormat)} ${week.endWeek.format(localeDayMonthFormat)}`
        }).reverse()

        return {
            labels,
            dataset,
            datasetMax: Math.max.apply(Math, dataset)
        }
    }
)

export const liftGraphDataSelector = (liftId) => createSelector(
    [
        completedExercisesLiftSelector(liftId),
        setsSelector,
        completedWorkoutsSelector,
        (state) => state.user.entity
    ],
    (exercises, sets, workouts, user) => {
        const topSets = formatTopSets(exercises, sets, workouts)
            .sort((a, b) => (a.moment - b.moment))

        const dataset = topSets.map((set) => set.weight)
        const labels = topSets.map((set) => set.moment.format(localeDateFormat))
        const reps = topSets.map((set) => set.reps)

        return {
            labels,
            dataset,
            datasetMax: Math.max.apply(Math, dataset),
            meta: {
                reps,
                weightMeasure: user.weightMeasure
            }
        }
    }
)
