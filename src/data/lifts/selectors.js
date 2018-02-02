import { createSelector } from 'reselect'

import moment from 'utils/moment'
import { localeDateFormat } from 'utils/date'
import Lift from 'data/lifts/schema'
import { completedExercisesLiftSelector } from 'data/exercises/selectors'
import { setsSelector } from 'data/sets/selectors'
import { completedWorkoutsSelector } from 'data/workouts/selectors'

const formatLift = (lift) => Lift({
    ...lift
})

export const liftSelector = (id) => createSelector(
    [
        (state) => state.lifts.entities
    ],
    (lifts) => {
        if (lifts.length > 0) {
            const lift = lifts.find((lift) => (lift.id === id))
            return lift ? formatLift(lift) : null
        }
        return null
    }
)

export const liftsSelector = createSelector(
    [
        (state) => state.lifts.entities
    ],
    (lifts) => lifts
        .map((lift) => formatLift(lift))
)

export const liftExerciseSelector = (exerciseId) => createSelector(
    [
        (state) => state.exercises.entities,
        (state) => state.lifts.entities,
    ],
    (exercises, lifts) => {
        const exercise = exercises.find((exercise) => (exercise.id === exerciseId))
        const lift = exercise && lifts.find((lift) => (lift.id === exercise.liftId))
        return lift && Object.keys(lift).length > 0 && formatLift(lift)
    }
)

const round = (x) => {
    const number = Math.ceil(x/2.5) * 2.5
    return number > 0 ? number : 0
}

export const topLiftSetsSelector = (liftId) => createSelector(
    [
        completedExercisesLiftSelector(liftId),
        setsSelector,
        completedWorkoutsSelector,
    ],
    (exercises, sets, workouts) => {
        const topSets = formatLiftTopSets(exercises, sets, workouts)

        return topSets.map((set) => ({
            ...set,
            rm: round(Number(set.weight) * (36 / (37 - Number(set.reps)))),
            completedAt: moment(set.completedAt).format(localeDateFormat)
        })).sort((a, b) => a.rm - b.rm).reverse()
    }
)

export const formatLiftTopSets = (exercises, sets, workouts) => {
    const completedExercisesIds = exercises.map((exercise) => exercise.id)
    const completedSets = sets.filter((set) =>  completedExercisesIds.includes(set.exerciseId))

    const topSets = completedSets.reduce((prev, curr) => {
        const topSet = prev[curr.exerciseId] && prev[curr.exerciseId].weight > curr.weight ?
            prev[curr.exerciseId] :
            {
                weight: curr.weight,
                reps: curr.reps
            }

        return {
            ...prev,
            [curr.exerciseId]: topSet
        }
    }, {})

    Object.keys(topSets).forEach((key) => {
        const exercise = exercises.find((exercise) => exercise.id === Number(key))
        const workout = workouts.find((workout) => exercise.workoutId === workout.id)
        topSets[key].completedAt = workout.completedAt
    })

    return Object.keys(topSets)
        .map((key) => topSets[key])
        .sort((a, b) => (new Date(b.completedAt) - new Date(a.completedAt)))
}
