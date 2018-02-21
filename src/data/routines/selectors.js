import { createSelector } from 'reselect'

const formatRoutine = (routine) => ({
    ...routine
})

export const routineSelector = (id) => createSelector(
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

export const routinesSelector = createSelector(
    [
        state => state.routines.entities
    ],
    (routines) => routines
        .map((routine) => formatRoutine(routine))
        .filter((routine) => !routine.program)
)

export const defaultRoutinesSelector = createSelector(
    [
        state => state.routines.entities
    ],
    (routines) => routines
        .map((routine) => formatRoutine(routine))
        .filter((routine) => routine.program)
)
