import { createSelector } from 'reselect'

import { workoutsRoutineSelector } from 'data/workouts/selectors'

export const graphDataSelector = (routineId) => createSelector(
    [
        workoutsRoutineSelector(routineId)
    ],
    (workouts) => ({
        data: workouts
    })
)
