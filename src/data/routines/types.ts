import { IStateMap, IActionMap, IDataRequestMap } from 'data/types'

export interface IRoutine {
    id: number
    userId: number
    program: {
        id: number
        name?: string
        content?: string
    } | null
    name?: string
    notes?: string
    createdAt: string
    updatedAt: string
}

export interface IFormatedRoutine extends IRoutine {
}

export type IRoutinesState = IStateMap<IRoutine>

export type IRoutinesAction = IActionMap<IRoutine>

export type IRoutineRequestData = IDataRequestMap<IRoutine>
