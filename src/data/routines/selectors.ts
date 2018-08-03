import { createSelector } from 'reselect'

import { Routine } from 'data/routines/types'
import { RootState } from 'data/types'
import { order } from 'data/utils'

export const routineSelector = createSelector(
    [(state: RootState, id: number) => state.routines.entities[id]],
    (routine): Routine | null => {
        return routine || null
    }
)

export const routinesSelector = createSelector(
    [(state: RootState) => order(state.routines)],
    (routines): Routine[] => routines.filter((routine) => !routine.program)
)

export const defaultRoutinesSelector = createSelector(
    [(state: RootState) => order(state.routines)],
    (routines): Routine[] => routines.filter((routine) => routine.program)
)
