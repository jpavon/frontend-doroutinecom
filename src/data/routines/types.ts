import { IStateMap, IActionMap, IDataRequestMap } from 'data/types'

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

export interface IFormatedRoutine extends IRoutine {
}

export type IRoutinesState = IStateMap<IRoutine>

export type IRoutinesAction = IActionMap<IRoutine>

export type IRoutineRequestData = IDataRequestMap<IRoutine>
