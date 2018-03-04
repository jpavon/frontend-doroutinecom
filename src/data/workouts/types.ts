import { IFetchStatus, IEntitiesStatus, IApiFailure, IAction, IDataMap } from 'data/types'
import { IFormatedRoutine } from 'data/routines/types'

export interface IWorkout {
    id: number
    userId: number
    routineId: number | null
    name?: string
    startedAt: string
    completedAt?: string | null
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

export interface IWorkoutsAction extends IAction {
    payload: IWorkout | IWorkout[]
    error: IApiFailure
}

export type IWorkoutData = IDataMap<IWorkout & {workoutId: number}>
