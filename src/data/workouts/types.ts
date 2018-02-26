import { IFetchStatus, IEntitiesStatus } from 'data/types'
import { IFormatedRoutine } from 'data/routines/types'

export interface IWorkout {
    id: number
    userId: number
    routineId?: number
    name?: string
    startedAt: string
    completedAt?: string
    notes?: string
    createdAt: string
    updatedAt: string
}

export interface IFormatedWorkout extends IWorkout {
    displayName?: string,
    day?: string,
    duration?: string,
    routine?: IFormatedRoutine
}

export interface IWorkoutsState {
    fetchStatus: IFetchStatus
    entitiesStatus: IEntitiesStatus
    entities: IWorkout[]
}
