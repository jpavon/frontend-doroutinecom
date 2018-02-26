import { IFetchStatus, IEntitiesStatus } from 'data/types'

export interface ILift {
    id: number
    userId: number
    name?: string
    createdAt: string
    updatedAt: string
}

export interface IFormatedLift extends ILift {
}

export interface ILiftsState {
    fetchStatus: IFetchStatus
    entitiesStatus: IEntitiesStatus
    entities: ILift[]
}
