import { createSelector } from 'reselect'

import { RootState } from 'data/types'
import { Set, TopSet } from 'data/sets/types'
import { Exercise } from 'data/exercises/types'
import { Workout } from 'data/workouts/types'
import { Lift } from 'data/lifts/types'

import moment from 'utils/moment'
import { dateFormat } from 'utils/date'
import {
    completedExercisesSelector,
    completedExercisesLiftSelector
} from 'data/exercises/selectors'
import { completedWorkoutsSelector } from 'data/workouts/selectors'
import { liftsSelector } from 'data/lifts/selectors'
import { order } from 'data/utils'
import calculateRepMax from 'utils/calculateRepMax'

export const setsSelector = createSelector(
    [(state: RootState) => order(state.sets)],
    (sets): Set[] => sets
)

export const setsExerciseSelector = (exerciseId: number) =>
    createSelector(
        [setsSelector],
        (sets): Set[] => sets.filter((set) => set.exerciseId === exerciseId)
    )

export const completedSetsSelector = createSelector(
    [setsSelector],
    (sets): Set[] => sets.filter((set) => set.isCompleted)
)

export const formatTopSets = (
    exercises: Exercise[],
    sets: Set[],
    workouts: Workout[],
    lifts: Lift[] | null
): TopSet[] => {
    const completedExercisesIds = exercises.map((exercise) => exercise.id)

    const completedSets = sets.filter((set) =>
        completedExercisesIds.includes(set.exerciseId)
    )

    const topSets = completedSets.reduce(
        (acc, curr) => {
            const currentRm =
                curr.reps && curr.weight
                    ? calculateRepMax(curr.reps, curr.weight)
                    : 0

            if (acc[curr.exerciseId] && acc[curr.exerciseId].rm > currentRm) {
                return acc
            }

            const exercise = exercises.find(
                (e) => e.id === Number(curr.exerciseId)
            )

            const lift =
                lifts &&
                lifts.find((l) => (exercise ? l.id === exercise.liftId : false))

            const workout = workouts.find(
                (w) => (exercise ? w.id === exercise.workoutId : false)
            )

            return {
                ...acc,
                [curr.exerciseId]: {
                    weight: curr.weight || 0,
                    reps: curr.reps || 0,
                    rm: currentRm,
                    completedAt: moment(workout!.completedAt!).format(
                        dateFormat
                    ),
                    completeAtMoment: moment(workout!.completedAt!),
                    workoutId: workout!.id,
                    liftId: exercise!.liftId!,
                    lift: lift ? lift.name : null
                }
            }
        },
        {} as Record<number, TopSet>
    )

    return Object.values(topSets).filter((set) => set.liftId)
}

export const topSetsCompletedSelector = createSelector(
    [
        completedExercisesSelector,
        setsSelector,
        completedWorkoutsSelector,
        liftsSelector
    ],
    (exercises, sets, workouts, lifts): TopSet[] => {
        return formatTopSets(exercises, sets, workouts, lifts).sort((a, b) => {
            // order by completeAt, otherwise by weight
            if (a.completeAtMoment < b.completeAtMoment) {
                return 1
            } else if (a.completeAtMoment > b.completeAtMoment) {
                return -1
            }

            if (a.weight > b.weight) {
                return -1
            } else if (a.weight < b.weight) {
                return 1
            } else {
                return 0
            }
        })
    }
)

export const topSetsForALiftSelector = (liftId: number) =>
    createSelector(
        [
            completedExercisesLiftSelector(liftId),
            setsSelector,
            completedWorkoutsSelector
        ],
        (exercises, sets, workouts): TopSet[] => {
            return formatTopSets(exercises, sets, workouts, null).sort(
                (a, b) => b.rm - a.rm
            )
        }
    )

export const previouslyCompletedSetsSelector = (liftId: number) =>
    createSelector(
        [
            completedExercisesLiftSelector(liftId),
            setsSelector,
            completedWorkoutsSelector
        ],
        (exercises, sets, workouts): Set[] => {
            const exercisesDates = exercises
                .map((exercise) => {
                    const workout = workouts.find(
                        (w) => w.id === exercise.workoutId
                    )
                    return {
                        exerciseId: exercise.id,
                        completedAt: workout && workout.completedAt
                    }
                })
                .sort((a, b) => {
                    if (a.completedAt && b.completedAt) {
                        return (
                            Number(moment(b.completedAt)) -
                            Number(moment(a.completedAt))
                        )
                    }
                    return 0
                })

            if (exercisesDates.length === 0) {
                return []
            }

            const lastExerciseId = exercisesDates[0].exerciseId

            return sets.filter((set) => set.exerciseId === lastExerciseId)
        }
    )
