import { createSelector } from 'reselect'

import Routine from 'data/routines/schema'

const formatRoutine = (routine) => Routine({
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
    (routines) => routines.length > 0 && formatRoutine(
        routines.find((routine) => (routine.slug === slug))
    )
)
