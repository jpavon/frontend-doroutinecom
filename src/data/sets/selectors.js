import { createSelector } from 'reselect'

import moment from 'utils/moment'
import { dateFormat } from 'utils/date'
import { completedExercisesSelector, completedExercisesLiftSelector } from 'data/exercises/selectors'
import { completedWorkoutsSelector } from 'data/workouts/selectors'
import { liftsSelector } from 'data/lifts/selectors'

const formatSet = (set) => ({
    ...set
})

export const setsSelector = createSelector(
    [
        (state) => state.sets.entities,
    ],
    (sets) => sets
        .map((set) => formatSet(set))
)

export const setsExerciseSelector = (exerciseId) => createSelector(
    [
        setsSelector
    ],
    (sets) => sets
        .filter((set) => (set.exerciseId === exerciseId))
)

export const topSetsSelector = createSelector(
    [
        completedExercisesSelector,
        setsSelector,
        completedWorkoutsSelector,
        liftsSelector
    ],
    (exercises, sets, workouts, lifts) => {
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

export const topLiftSetsSelector = (liftId) => createSelector(
    [
        completedExercisesLiftSelector(liftId),
        setsSelector,
        completedWorkoutsSelector,
    ],
    (exercises, sets, workouts) => {
        return formatTopSets(exercises, sets, workouts)
            .sort((a, b) => b.rm - a.rm)
    }
)

const round = (x) => {
    const number = Math.ceil(x/2.5) * 2.5
    return number > 0 ? number : 0
}

export const formatTopSets = (exercises, sets, workouts, lifts) => {
    const completedExercisesIds = exercises.map((exercise) => exercise.id)
    const completedSets = sets.filter((set) =>  completedExercisesIds.includes(set.exerciseId))
        .map((set) => ({
            ...set,
            rm: round(Number(set.weight) * (36 / (37 - Number(set.reps)))),
        }))

    const topSets = completedSets.reduce((prev, curr) => {
        if (prev[curr.exerciseId] && prev[curr.exerciseId].rm === 0 && prev[curr.exerciseId].reps > curr.reps) {
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
        const workout = workouts.find((workout) => exercise.workoutId === workout.id)
        topSets[exerciseId].completedAt = moment(workout.completedAt).format(dateFormat)
        topSets[exerciseId].moment = moment(workout.completedAt)
        topSets[exerciseId].workoutId = workout.id
        topSets[exerciseId].liftId = exercise.liftId
        const lift = lifts && lifts.find((lift) => lift.id === exercise.liftId)
        topSets[exerciseId].lift = lift && lift.name
    })

    return Object.keys(topSets)
        .map((exerciseId) => topSets[exerciseId])
        .filter((set) => set.liftId)
}

export const previouslyCompletedSetsSelector = (exerciseId, liftId) => createSelector(
    [
        completedExercisesLiftSelector(liftId),
        setsSelector,
        completedWorkoutsSelector
    ],
    (exercises, sets, workouts) => {
        const exercisesDates = exercises.map((exercise) => {
            const workout = workouts.find((workout) => workout.id === exercise.workoutId)
            return {
                exerciseId: exercise.id,
                completedAt: workout.completedAt
            }
        }).sort((a, b) => (moment(b.completedAt) - moment(a.completedAt)))

        if (exercisesDates.length === 0) return []

        const lastExerciseId = exercisesDates[0].exerciseId

        return sets.filter((set) => set.exerciseId === lastExerciseId)
    }
)
