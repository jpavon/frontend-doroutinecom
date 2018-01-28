import { createSelector } from 'reselect'

import Routine from 'data/routines/schema'

const formatRoutine = (routine) => Routine({
    ...routine
})

export const routinesSelector = createSelector(
    [
        state => state.routines.entities
    ],
    (routines) => routines
        .map((routine) => formatRoutine(routine))
)

export const routineByIdSelector = (id) => createSelector(
    [
        (state) => state.routines.entities
    ],
    (routines) => {
        if (routines.length > 0) {
            const routine = routines.find((routine) => (routine.id === id))
            return routine ? formatRoutine(routine) : null
        }
        return null
    }
)
