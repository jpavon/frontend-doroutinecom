import { createSelector } from 'reselect'

import { IRoutine } from 'data/routines/types'
import { IRootState } from 'data/types'
import { order } from 'data/utils'

export const routineSelector = createSelector(
    [(state: IRootState, id: number) => state.routines.entities[id]],
    (routine): IRoutine | null => {
        return routine || null
    }
)

export const routinesSelector = createSelector(
    [(state: IRootState) => order(state.routines)],
    (routines): IRoutine[] => routines.filter((routine) => !routine.program)
)

export const defaultRoutinesSelector = createSelector(
    [(state: IRootState) => order(state.routines)],
    (routines): IRoutine[] => routines.filter((routine) => routine.program)
)
