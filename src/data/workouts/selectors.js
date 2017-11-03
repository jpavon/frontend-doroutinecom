import { createSelector } from 'reselect'
import moment from 'moment'

const formatWorkout = (workout) => ({
    ...workout,
    dayFormatted: workout && workout.day && moment(workout.day).format('ddd D')
})

const formatMonthlyWorkouts = (workouts) => {
    var reduced = workouts.entities.reduce((prev, curr) => {
        const month = moment(curr.day).format('M-YYYY')
        const workout = formatWorkout(curr)

        if (prev[month]) {
            prev[month].data.push(workout)
        } else {
            prev[month] = {
                month: moment(curr.day).format('MMMM YYYY'),
                data: [workout]
            }
        }

        return prev
    }, {})

    return Object.keys(reduced).map((k) => reduced[k])
}

export const monthlyWorkoutsSelector = createSelector(
    [
        state => state.workouts
    ],
    (workouts) => formatMonthlyWorkouts(workouts)
)

export const workoutSelector = (id) => createSelector(
    [
        (state) => state.workouts
    ],
    (workouts) => workouts.entities.length ? formatWorkout(workouts.entities.find((workout) => (workout.id === id))) : {}
)
