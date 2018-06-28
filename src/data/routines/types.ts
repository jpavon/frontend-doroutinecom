import { IStateMap } from 'data/types'
import * as actions from 'data/routines/actions'

export interface IRoutine {
    id: number
    userId: number
    name: string | null
    notes: string | null
    createdAt: string
    updatedAt: string
    program?: {
        id: number
        name: string | null
        content: string | null
    } | null
}

export type IRoutinesState = IStateMap<IRoutine>

export type IRoutinesAction = ReturnType<typeof actions[keyof typeof actions]>

export type IRoutineRequestData = Partial<IRoutine>
