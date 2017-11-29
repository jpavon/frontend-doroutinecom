import { createSelector } from 'reselect'

const formatWorkout = (workout) => ({
    ...workout,
    // dayFormatted: workout && workout.day && moment(workout.day).format('ddd D')
})

// const formatMonthlyWorkouts = (workouts) => {
//     var reduced = workouts.reduce((prev, curr) => {
//         const month = moment(curr.day).format('M-YYYY')
//         const workout = formatWorkout(curr)

//         if (prev[month]) {
//             prev[month].data.push(workout)
//         } else {
//             prev[month] = {
//                 displayDate: moment(curr.day).format('MMMM YYYY'),
//                 month: String(moment(curr.day).month() + 1),
//                 year: moment(curr.day).format('YYYY'),
//                 data: [workout]
//             }
//         }

//         return prev
//     }, {})

//     return Object.keys(reduced).map((k) => reduced[k])
// }

export const workoutsSelector = (routineId, blockId) => createSelector(
    [
        state => state.workouts.entities
    ],
    (workouts) => workouts
        .filter((workout) => (workout.blockId === blockId && workout.routineId === routineId))
        .sort((a, b) => (new Date(a.day) - new Date(b.day)))
        .map((workout) => formatWorkout(workout))
)

export const workoutSelector = (id) => createSelector(
    [
        (state) => state.workouts.entities
    ],
    (workouts) => formatWorkout(workouts.find((workout) => (workout.id === id)))
)

// export const monthlyWorkoutsSelector = createSelector(
//     [
//         workoutsSelector
//     ],
//     (workouts) => formatMonthlyWorkouts(workouts)
// )

export const blocksWorkoutsSelector = (routineId) => createSelector(
    [
        (state) => state.workouts.entities
    ],
    (workouts) => {
        return [...new Set(
            workouts
                .filter((workout) => (workout.routineId === routineId))
                .map((workout) => (workout.blockId))
        )].filter(Number)
    }
)
