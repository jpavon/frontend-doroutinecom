import { IFetchStatus, IEntitiesStatus } from 'data/types'

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

export interface IRoutinesState {
    fetchStatus: IFetchStatus
    entitiesStatus: IEntitiesStatus
    entities: IRoutine[]
}
