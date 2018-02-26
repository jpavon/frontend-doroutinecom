import { FetchStatus, IEntitiesStatus } from 'data/types'

export interface Routine {
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

export interface FormatedRoutine extends Routine {
}

export interface RoutinesState {
    fetchStatus: FetchStatus
    entitiesStatus: IEntitiesStatus
    entities: Routine[]
}
