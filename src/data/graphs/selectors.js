import { createSelector } from 'reselect'

import moment, { localeDayMonthFormat, localeDateFormat } from 'utils/date'
import { completedWorkoutsSelector } from 'data/workouts/selectors'
import { completedExercisesLiftSelector } from 'data/exercises/selectors'
import { setsSelector } from 'data/sets/selectors'


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

const getWorkoutsDataset = (workouts) => {
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

export const workoutsGraphDataSelector = createSelector(
    [
        completedWorkoutsSelector
    ],
    (workouts) => {
        const dataset = getWorkoutsDataset(workouts).reverse()

        return {
            labels: [
                `  ${startWeek3.format(localeDayMonthFormat)} - ${endWeek3.format(localeDayMonthFormat)}  `,
                `  ${startWeek2.format(localeDayMonthFormat)} - ${endWeek2.format(localeDayMonthFormat)}  `,
                `  ${startWeek1.format(localeDayMonthFormat)} - ${endWeek1.format(localeDayMonthFormat)}  `,
                `  ${startWeek.format(localeDayMonthFormat)} - ${endWeek.format(localeDayMonthFormat)}  `,
            ],
            dataset,
            datasetMax: Math.max.apply(Math, dataset)
        }
    }
)

export const liftGraphDataSelector = (liftId) => createSelector(
    [
        completedExercisesLiftSelector(liftId),
        setsSelector,
        completedWorkoutsSelector
    ],
    (exercises, sets, workouts) => {
        const completedExercisesIds = exercises.map((exercise) => exercise.id)
        const completedSets = sets.filter((set) =>  completedExercisesIds.includes(set.exerciseId))

        const topSets = completedSets.reduce((prev, curr) => {
            const topSet = prev[curr.exerciseId] && prev[curr.exerciseId].weight > curr.weight ?
                prev[curr.exerciseId] :
                {
                    weight: curr.weight,
                    reps: curr.reps
                }

            return {
                ...prev,
                [curr.exerciseId]: topSet
            }
        }, {})

        Object.keys(topSets).forEach((key) => {
            const exercise = exercises.find((exercise) => exercise.id === Number(key))
            const workout = workouts.find((workout) => exercise.workoutId === workout.id)
            topSets[key].completedAt = workout.completedAt
        })

        const orderedTopSets = Object.keys(topSets)
            .map((key) => topSets[key])
            .sort((a, b) => (new Date(b.completedAt) - new Date(a.completedAt)))

        const dataset = orderedTopSets.map((set) => set.weight).reverse()
        return {
            labels: orderedTopSets.map((set) => moment(set.completedAt).format(localeDateFormat)).reverse(),
            dataset,
            datasetMax: Math.max.apply(Math, dataset),
            meta: {
                reps: orderedTopSets.map((set) => set.reps).reverse()
            }
        }
    }
)
