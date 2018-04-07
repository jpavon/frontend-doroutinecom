import { IStateMap } from 'data/types'
import * as actionTypes from 'data/routines/actions'

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

export type IRoutinesAction = ReturnType<typeof actionTypes[keyof typeof actionTypes]>

export type IRoutineRequestData = Partial<IRoutine>

export interface IRoutineActionArgs {
    post: (data?: IRoutineRequestData) => void
    put: (id: number, data: IRoutineRequestData, resolve?: () => void, reject?: () => void) => void
    delete: (id: number) => void
}
