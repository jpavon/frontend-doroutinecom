import { createSelector } from 'reselect'

import { IRoutine, IFormatedRoutine } from 'data/routines/types'
import { IRootState } from 'data/types'

const formatRoutine = (routine: IRoutine): IFormatedRoutine => ({
    ...routine
})

export const routineSelector = (id: number) =>
    createSelector(
        [(state: IRootState) => state.routines.entities],
        (routines): IFormatedRoutine | null => {
            if (routines.length > 0) {
                const routine = routines.find((routine) => routine.id === id)
                return routine ? formatRoutine(routine) : null
            }
            return null
        }
    )

export const routinesSelector = createSelector(
    [(state: IRootState) => state.routines.entities],
    (routines): IFormatedRoutine[] =>
        routines
            .map((routine) => formatRoutine(routine))
            .filter((routine) => !routine.program)
)

export const defaultRoutinesSelector = createSelector(
    [(state: IRootState) => state.routines.entities],
    (routines): IFormatedRoutine[] =>
        routines
            .map((routine) => formatRoutine(routine))
            .filter((routine) => routine.program)
)
