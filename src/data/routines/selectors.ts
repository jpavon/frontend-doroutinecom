import { createSelector } from 'reselect'

import { IRoutine, IFormatedRoutine } from 'data/routines/types'
import { IRootState } from 'data/types'
import { order } from 'data/utils'

const formatRoutine = (routine: IRoutine): IFormatedRoutine => ({
    ...routine
})

export const routineSelector = createSelector(
    [(state: IRootState, id: number) => state.routines.entities[id]],
    (routine) => {
        return formatRoutine(routine)
    }
)

export const routinesSelector = createSelector(
    [(state: IRootState) => order(state.routines)],
    (routines): IFormatedRoutine[] =>
        Object.values(routines)
            .map((routine) => formatRoutine(routine))
            .filter((routine) => !routine.program)
)

export const defaultRoutinesSelector = createSelector(
    [(state: IRootState) => order(state.routines)],
    (routines): IFormatedRoutine[] =>
        Object.values(routines)
            .map((routine) => formatRoutine(routine))
            .filter((routine) => routine.program)
)
