import { createSelector } from 'reselect'

export const graphDataSelector = createSelector(
    [
        (state) => state.workouts.entities
    ],
    (workouts) => {
        return {
            datasets: [],
            labels: []
        }
    }
)
