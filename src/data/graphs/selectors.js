import { createSelector } from 'reselect'

import { completedWorkoutsSelector } from 'data/workouts/selectors'

export const graphDataSelector = () => createSelector(
    [
        completedWorkoutsSelector
    ],
    (workouts) => ({
        data: workouts
    })
)
