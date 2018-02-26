import { FetchStatus, IEntitiesStatus } from 'data/types'
import { FormatedRoutine } from 'data/routines/types'

export interface Workout {
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

export interface FormatedWorkout extends Workout {
    displayName?: string,
    day?: string,
    duration?: string,
    routine?: FormatedRoutine
}

export interface WorkoutsState {
    fetchStatus: FetchStatus
    entitiesStatus: IEntitiesStatus
    entities: Workout[]
}
