import { createSelector } from 'reselect'

import moment from 'utils/moment'
import { localeDateFormat } from 'utils/date'
import Set from 'data/sets/schema'
import { completedExercisesSelector, completedExercisesLiftSelector } from 'data/exercises/selectors'
import { completedWorkoutsSelector } from 'data/workouts/selectors'
import { liftsSelector } from 'data/lifts/selectors'

const formatSet = (set) => Set({
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
                // compare by moment, otherwise by weight
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
        const topSets = formatTopSets(exercises, sets, workouts)

        return formatSetsRm(topSets)
            .sort((a, b) => b.rm - a.rm)
    }
)

export const formatTopSets = (exercises, sets, workouts, lifts) => {
    const completedExercisesIds = exercises.map((exercise) => exercise.id)
    const completedSets = sets.filter((set) =>  completedExercisesIds.includes(set.exerciseId))

    const topSets = completedSets.reduce((prev, curr) => {
        const topSet = prev[curr.exerciseId] && prev[curr.exerciseId].weight > curr.weight ?
            prev[curr.exerciseId] :
            {
                weight: curr.weight,
                reps: curr.reps,
            }

        return {
            ...prev,
            [curr.exerciseId]: topSet
        }
    }, {})

    Object.keys(topSets).forEach((key) => {
        const exercise = exercises.find((exercise) => exercise.id === Number(key))
        const workout = workouts.find((workout) => exercise.workoutId === workout.id)
        topSets[key].completedAt = moment(workout.completedAt).format(localeDateFormat)
        topSets[key].moment = moment(workout.completedAt)
        topSets[key].workoutId = workout.id
        const lift = lifts && lifts.find((lift) => lift.id === exercise.liftId)
        topSets[key].lift = lift && lift.name
        topSets[key].liftId = lift && lift.id
    })

    return Object.keys(topSets)
        .map((key) => topSets[key])
}

const round = (x) => {
    const number = Math.ceil(x/2.5) * 2.5
    return number > 0 ? number : 0
}

export const formatSetsRm = (sets) => {
    return sets.map((set) => ({
        ...set,
        rm: round(Number(set.weight) * (36 / (37 - Number(set.reps)))),
    }))
}
