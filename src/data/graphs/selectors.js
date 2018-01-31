import { createSelector } from 'reselect'
import Moment from 'moment'
import { extendMoment } from 'moment-range'

import { completedWorkoutsSelector } from 'data/workouts/selectors'

const moment = extendMoment(Moment)

const startWeek = moment().startOf('isoWeek')
const endWeek = moment().endOf('isoWeek')

const startWeek1 = moment().subtract(1, 'weeks').startOf('isoWeek')
const endWeek1 = moment().subtract(1, 'weeks').endOf('isoWeek')

const startWeek2 = moment().subtract(2, 'weeks').startOf('isoWeek')
const endWeek2 = moment().subtract(2, 'weeks').endOf('isoWeek')

const startWeek3 = moment().subtract(3, 'weeks').startOf('isoWeek')
const endWeek3 = moment().subtract(3, 'weeks').endOf('isoWeek')

const range = moment().range(startWeek, endWeek)
const range1 = moment().range(startWeek1, endWeek1)
const range2 = moment().range(startWeek2, endWeek2)
const range3 = moment().range(startWeek3, endWeek3)

const getSeries = (workouts) => {
    const series = [0, 0, 0, 0]

    workouts.forEach((workout) => {
        if (range.contains(new Date(workout.completedAt))) {
            series[0] = series[0] + 1
        }
        if (range1.contains(new Date(workout.completedAt))) {
            series[1] = series[1] + 1
        }
        if (range2.contains(new Date(workout.completedAt))) {
            series[2] = series[2] + 1
        }
        if (range3.contains(new Date(workout.completedAt))) {
            series[3] = series[3] + 1
        }
    })

    return series
}

export const graphDataSelector = createSelector(
    [
        completedWorkoutsSelector
    ],
    (workouts) => {
        const series = getSeries(workouts).reverse()

        return {
            labels: [
                `${startWeek3.format('MM/DD')} - ${endWeek3.format('MM/DD')}`,
                `${startWeek2.format('MM/DD')} - ${endWeek2.format('MM/DD')}`,
                `${startWeek1.format('MM/DD')} - ${endWeek1.format('MM/DD')}`,
                `${startWeek.format('MM/DD')} - ${endWeek.format('MM/DD')}`,
            ],
            series,
            maxSerie: Math.max.apply(Math, series)
        }
    }
)
