import { createSelector } from 'reselect'

import { IRootState } from 'data/types'
import { IWorkout, IFormatedWorkout } from 'data/workouts/types'
import { IFormatedRoutine } from 'data/routines/types'

import moment from 'utils/moment'
import { formatDuration, longDateFormat } from 'utils/date'
import { routinesSelector } from 'data/routines/selectors'
import { order } from 'data/utils'

const formatWorkout = (
    workout: IWorkout,
    routines: IFormatedRoutine[],
    liftNames?: string[]
): IFormatedWorkout => {
    const routine = routines.find((routine) => routine.id === workout.routineId)

    return {
        ...workout,
        displayName: routine ? routine.name : workout.name,
        duration:
            workout.completedAt &&
            formatDuration(workout.startedAt, workout.completedAt),
        day:
            workout.completedAt &&
            moment(workout.completedAt).format(longDateFormat),
        routine: routine || null,
        liftNames
    }
}

export const workoutSelector = createSelector(
    [
        (state: IRootState, id: number) => state.workouts.entities[id],
        routinesSelector
    ],
    (workout, routines) => {
        return workout ? formatWorkout(workout, routines) : null
    }
)

export const workoutsSelector = createSelector(
    [
        (state) => order(state.workouts.entitiesOrder, state.workouts.entities),
        routinesSelector,
        (state) => state.exercises.entities,
        (state) => state.lifts.entities
    ],
    (workouts, routines, exercises, lifts): IFormatedWorkout[] =>
        Object.values(workouts).map((workout) => {
            const workoutExercisesLiftsIds = Object.values(exercises)
                .filter((exercise) => exercise.workoutId === workout.id)
                .map((exercise) => exercise.liftId)

            const liftNames = Object.values(lifts)
                .filter((lift) => workoutExercisesLiftsIds.includes(lift.id))
                .map((lift) => `${lift.name}`)

            return formatWorkout(workout, routines, liftNames)
        })
)

export const completedWorkoutsSelector = createSelector(
    [workoutsSelector],
    (workouts): IFormatedWorkout[] =>
        workouts.filter((workout) => workout.completedAt).sort((a, b) => {
            if (!b.completedAt || !a.completedAt) {
                return 0
            }
            return Number(moment(b.completedAt)) - Number(moment(a.completedAt))
        })
)

export const pendingWorkoutsSelector = createSelector(
    [workoutsSelector],
    (workouts): IFormatedWorkout[] =>
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
