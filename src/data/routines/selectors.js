import { createSelector } from 'reselect'

const formatRoutine = (routine) => ({
    ...routine
})

export const routinesSelector = (blockId) => createSelector(
    [
        state => state.routines.entities
    ],
    (routines) => routines
        .map((routine) => formatRoutine(routine))
)

export const routineSelector = (slug) => createSelector(
    [
        (state) => state.routines.entities
    ],
    (routines) => formatRoutine(
        routines.find((routine) => (routine.slug === slug))
    )
)
