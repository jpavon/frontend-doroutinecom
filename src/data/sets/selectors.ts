import { createSelector } from 'reselect'

import { IRootState } from 'data/types'
import { ISet, IFormatedSet, ITopSet } from 'data/sets/types'
import { IFormatedExercise } from 'data/exercises/types'
import { IFormatedWorkout } from 'data/workouts/types'
import { ILift } from 'data/lifts/types'

import moment from 'utils/moment'
import { dateFormat } from 'utils/date'
import { completedExercisesSelector, completedExercisesLiftSelector } from 'data/exercises/selectors'
import { completedWorkoutsSelector } from 'data/workouts/selectors'
import { liftsSelector } from 'data/lifts/selectors'

const formatSet = (set: ISet): IFormatedSet => ({
    ...set
})

export const setsSelector = createSelector(
    [
        (state: IRootState) => state.sets.entities,
    ],
    (sets): IFormatedSet[] => sets
        .map((set) => formatSet(set))
)

export const setsExerciseSelector = (exerciseId: number) => createSelector(
    [
        setsSelector
    ],
    (sets): IFormatedSet[] => sets
        .filter((set) => (set.exerciseId === exerciseId))
)

export const completedSetsSelector = createSelector(
    [
        setsSelector
    ],
    (sets): IFormatedSet[] => sets
        .filter((set) => (set.isCompleted))
)

const round = (x: number, nearest = 0.5) => {
    const value = Math.ceil(x / nearest) * nearest
    return value > 0 ? value : 0
}

export const formatTopSets = (
    exercises: IFormatedExercise[],
    sets: IFormatedSet[],
    workouts: IFormatedWorkout[],
    lifts: ILift[] | null
): ITopSet[] => {
    const completedExercisesIds = exercises.map((exercise) => exercise.id)
    const completedSets = sets.filter((set) =>  completedExercisesIds.includes(set.exerciseId))
        .map((set) => ({
            ...set,
            rm: round(Number(set.weight) * (36 / (37 - Number(set.reps)))),
        }))

    const topSets = completedSets.reduce((prev, curr) => {
        if (prev[curr.exerciseId] &&
            prev[curr.exerciseId].rm === 0 &&
            (curr.reps && prev[curr.exerciseId].reps > curr.reps)) {
                return {
                    ...prev
                }
        }

        if (prev[curr.exerciseId] && prev[curr.exerciseId].rm > curr.rm) {
            return { ...prev }
        } else {
            return {
                ...prev,
                [curr.exerciseId]: {
                    weight: curr.weight || 0,
                    reps: curr.reps || 0,
                    rm: curr.rm
                }
            }
        }
    }, {})

    Object.keys(topSets).forEach((exerciseId) => {
        const exercise = exercises.find((exercise) => exercise.id === Number(exerciseId))
        const workout = workouts.find((workout) => exercise ? exercise.workoutId === workout.id : false)
        topSets[exerciseId].completedAt = workout &&
            workout.completedAt &&
            moment(workout.completedAt).format(dateFormat)
        topSets[exerciseId].moment = workout && workout.completedAt && moment(workout.completedAt)
        topSets[exerciseId].workoutId = workout && workout.id
        topSets[exerciseId].liftId = exercise && exercise.liftId
        const lift = lifts && lifts.find((lift) => exercise ? lift.id === exercise.liftId : false)
        topSets[exerciseId].lift = lift && lift.name
    })

    return Object.keys(topSets)
        .map((exerciseId) => topSets[exerciseId])
        .filter((set) => set.liftId)
}

export const topSetsSelector = createSelector(
    [
        completedExercisesSelector,
        setsSelector,
        completedWorkoutsSelector,
        liftsSelector
    ],
    (exercises, sets, workouts, lifts): ITopSet[] => {
        return formatTopSets(exercises, sets, workouts, lifts)
            .sort((a, b) => {
                // order by moment, otherwise by weight
                if (a.moment < b.moment) {
                    return 1;
                } else if (a.moment > b.moment) {
                    return -1;
                }

                if (a.weight > b.weight) {
                    return -1;
                } else if (a.weight < b.weight) {
                    return 1
                } else {
                    return 0;
                }
            })
    }
)

export const topLiftSetsSelector = (liftId: number) => createSelector(
    [
        completedExercisesLiftSelector(liftId),
        setsSelector,
        completedWorkoutsSelector,
    ],
    (exercises, sets, workouts): ITopSet[] => {
        return formatTopSets(exercises, sets, workouts, null)
            .sort((a, b) => b.rm - a.rm)
    }
)

export const previouslyCompletedSetsSelector = (exerciseId: number, liftId: number) => createSelector(
    [
        completedExercisesLiftSelector(liftId),
        setsSelector,
        completedWorkoutsSelector
    ],
    (exercises, sets, workouts): IFormatedSet[] => {
        const exercisesDates = exercises.map((exercise) => {
            const workout = workouts.find((workout) => workout.id === exercise.workoutId)
            return {
                exerciseId: exercise.id,
                completedAt: workout && workout.completedAt
            }
        }).sort((a, b) => {
            if (a.completedAt && b.completedAt) {
                return Number(moment(b.completedAt)) - Number(moment(a.completedAt))
            }
            return 0
        })

        if (exercisesDates.length === 0) { return [] }

        const lastExerciseId = exercisesDates[0].exerciseId

        return sets.filter((set) => set.exerciseId === lastExerciseId)
    }
)
