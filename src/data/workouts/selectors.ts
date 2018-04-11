import { createSelector } from 'reselect'

import { IRootState } from 'data/types'
import { IWorkout, IFormatedWorkout } from 'data/workouts/types'
import { IFormatedRoutine } from 'data/routines/types'

import moment from 'utils/moment'
import { formatDuration, longDateFormat } from 'utils/date'
import { routinesSelector } from 'data/routines/selectors'

const formatWorkout = (
    workout: IWorkout,
    routines: IFormatedRoutine[],
    liftNames?: string[]
): IFormatedWorkout => {
    const routine = routines && routines.find((routine) => (routine.id === workout.routineId))
    return {
        ...workout,
        displayName: routine ? routine.name : workout.name,
        duration: workout.completedAt && formatDuration(workout.startedAt, workout.completedAt),
        day: workout.completedAt && moment(workout.completedAt).format(longDateFormat),
        routine: routine || null,
        liftNames
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
        routinesSelector,
        (state) => state.exercises.entities,
        (state) => state.lifts.entities,
    ],
    (workouts, routines, exercises, lifts): IFormatedWorkout[] =>
        workouts
            .map((workout) => {
                const workoutExercisesLiftsIds = exercises
                    .filter((exercise) => (exercise.workoutId === workout.id))
                    .map((exercise) => exercise.liftId)

                const liftNames = lifts
                        .filter((lift) => workoutExercisesLiftsIds.includes(lift.id))
                        .map((lift) => `${lift.name}`)

                return formatWorkout(workout, routines, liftNames)
            })
)

export const completedWorkoutsSelector = createSelector(
    [
        workoutsSelector
    ],
    (workouts): IFormatedWorkout[] =>
        workouts
            .filter((workout) => (workout.completedAt))
            .sort((a, b) => {
                if (!b.completedAt || !a.completedAt) { return 0 }
                return Number(moment(b.completedAt)) - Number(moment(a.completedAt))
            })
)

export const pendingWorkoutsSelector = createSelector(
    [
        workoutsSelector
    ],
    (workouts): IFormatedWorkout[] =>
        workouts
            .filter((workout) => (!workout.completedAt))
            .sort((a, b) => (
                Number(moment(b.startedAt)) - Number(moment(a.startedAt)))
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
