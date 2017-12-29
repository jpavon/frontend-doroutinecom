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
    (routines) => {
        if (routines.length > 0) {
            const routine = routines.find((routine) => (routine.slug === slug))
            return routine ? formatRoutine(routine) : null
        }
        return null
    }
)
