import { Moment } from 'moment'

import { IFetchStatus, IEntitiesStatus } from 'data/types'

export interface ISet {
    id: number
    userId: number
    exerciseId: number
    reps?: number
    weight?: number
    isCompleted: boolean
    createdAt: string
    updatedAt: string
}

export interface IFormatedSet extends ISet {
}

export interface ISetsState {
    fetchStatus: IFetchStatus
    entitiesStatus: IEntitiesStatus
    entities: ISet[]
}

export interface ITopSet {
    workoutId: number
    liftId: number
    lift?: string
    moment: Moment
    reps: number
    rm: number
    weight: number
    completedAt: string
}
