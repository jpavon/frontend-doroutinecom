import { createSelector } from 'reselect'

import { IRootState } from 'data/types'
import { IWorkout, IFormatedWorkout } from 'data/workouts/types'
import { IRoutine } from 'data/routines/types'

import moment from 'utils/moment'
import { formatDuration, longDateFormat } from 'utils/date'
import { routinesSelector } from 'data/routines/selectors'

const formatWorkout = (workout: IWorkout, routines: IRoutine[]): IFormatedWorkout => {
    const routine = routines && routines.find((routine) => (routine.id === workout.routineId))
    return {
        ...workout,
        displayName: routine ? (routine.name || workout.name) : null,
        duration: workout.completedAt && formatDuration(workout.startedAt, workout.completedAt),
        day: workout.completedAt && moment(workout.completedAt).format(longDateFormat),
        routine: routine ? routine : null
    }
}

export const workoutSelector = (id: number) => createSelector(
    [
        (state: IRootState) => state.workouts.entities,
        routinesSelector
    ],
    (workouts, routines): IFormatedWorkout | null => {
        if (workouts.length > 0) {
            const workout = workouts.find((workout) => (workout.id === id))
            return workout ? formatWorkout(workout, routines) : null
        }
        return null
    }
)

export const workoutsSelector = createSelector(
    [
        (state) => state.workouts.entities,
        routinesSelector
    ],
    (workouts, routines): IFormatedWorkout[] =>
        workouts
            .map((workout) => formatWorkout(workout, routines))
)

export const completedWorkoutsSelector = createSelector(
    [
        workoutsSelector
    ],
    (workouts): IFormatedWorkout[] =>
        workouts
            .filter((workout) => (workout.completedAt))
            .sort((a, b) => {
                if (b.completedAt && a.completedAt) {
                    return +moment(b.completedAt) - +moment(a.completedAt)
                }
                return 0
            })
)

export const pendingWorkoutsSelector = createSelector(
    [
        workoutsSelector
    ],
    (workouts): IFormatedWorkout[] =>
        workouts
            .filter((workout) => (!workout.completedAt))
            .sort((a, b) => (+moment(b.startedAt) - +moment(a.startedAt)))
)

// const startWeek = moment().startOf('week')
// const endWeek = moment().endOf('week')
// const range = moment().range(startWeek, endWeek)

// export const workoutsCompletedCurrentWeekSelector = createSelector(
//     [
//         completedWorkoutsSelector
//     ],
//     (workouts) => {
//         let amount = 0

//         workouts.forEach((workout) => {
//             if (range.contains(moment(workout.completedAt))) {
//                 amount = amount + 1
//             }
//         })

//         return amount
//     }
// )
