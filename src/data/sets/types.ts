import { Moment } from 'moment'

import { FetchStatus, IEntitiesStatus } from 'data/types'

export interface Set {
    id: number
    userId: number
    exerciseId: number
    reps?: number
    weight?: number
    isCompleted: boolean
    createdAt: string
    updatedAt: string
}

export interface FormatedSet extends Set {
}

export interface SetsState {
    fetchStatus: FetchStatus
    entitiesStatus: IEntitiesStatus
    entities: Set[]
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
