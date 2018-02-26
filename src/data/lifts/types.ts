import { FetchStatus, IEntitiesStatus } from 'data/types'

export interface Lift {
    id: number
    userId: number
    name?: string
    createdAt: string
    updatedAt: string
}

export interface FormatedLift extends Lift {
}

export interface LiftsState {
    fetchStatus: FetchStatus
    entitiesStatus: IEntitiesStatus
    entities: Lift[]
}
