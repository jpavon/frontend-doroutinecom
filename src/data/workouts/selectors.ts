import { createSelector } from 'reselect'
import * as moment from 'moment'

import { RootState } from 'data/types'
import { Workout } from 'data/workouts/types'

import { order } from 'data/utils'
import { formatDuration, longDateFormat } from 'utils/date'

export const workoutSelector = createSelector(
    [(state: RootState, id: number) => state.workouts.entities[id]],
    (workout) => (workout ? workout : null)
)

export const workoutsSelector = createSelector(
    [(state: RootState) => order(state.workouts)],
    (workouts): Workout[] => workouts
)

export const workoutDisplayNameSelector = createSelector(
    [workoutSelector, (state: RootState) => state.routines.entities],
    (workout, routines) => {
        const routine =
            workout && workout.routineId ? routines[workout.routineId] : null
        return (
            (routine ? routine.name : workout && workout.name) ||
            'No workout name set.'
        )
    }
)

export const workoutDisplayDurationSelector = createSelector(
    [workoutSelector],
    (workout) =>
        workout &&
        workout.completedAt &&
        formatDuration(workout.startedAt, workout.completedAt)
)

export const workoutRoutineSelector = createSelector(
    [workoutSelector, (state: RootState) => state.routines.entities],
    (workout, routines) =>
        workout && workout.routineId ? routines[workout.routineId] : null
)

export const workoutDisplayDaySelector = createSelector(
    [workoutSelector],
    (workout) =>
        workout &&
        workout.completedAt &&
        moment(workout.completedAt).format(longDateFormat)
)

export const workoutLiftNamesSelector = createSelector(
    [
        workoutSelector,
        (state) => state.exercises.entities,
        (state) => state.lifts.entities
    ],
    (workout, exercises, lifts) => {
        const workoutExercisesLiftsIds = Object.values(exercises)
            .filter((exercise) => workout && exercise.workoutId === workout.id)
            .map((exercise) => exercise.liftId)

        const workoutLifts = Object.values(lifts).filter((lift) =>
            workoutExercisesLiftsIds.includes(lift.id)
        )
        return workoutLifts && workoutLifts.map((lift) => `${lift.name}`)
    }
)

export const completedWorkoutsSelector = createSelector(
    [workoutsSelector],
    (workouts): Workout[] =>
        workouts.filter((workout) => workout.completedAt).sort((a, b) => {
            if (!b.completedAt || !a.completedAt) {
                return 0
            }
            return Number(moment(b.completedAt)) - Number(moment(a.completedAt))
        })
)

export const pendingWorkoutsSelector = createSelector(
    [workoutsSelector],
    (workouts): Workout[] =>
        workouts
            .filter((workout) => !workout.completedAt)
            .sort(
                (a, b) =>
                    Number(moment(b.startedAt)) - Number(moment(a.startedAt))
            )
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
