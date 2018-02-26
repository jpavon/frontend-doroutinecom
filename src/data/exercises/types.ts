import { IFetchStatus, IEntitiesStatus } from 'data/types'

export interface IExercise {
    id: number
    userId: number
    liftId?: number
    workoutId?: number
    routineId?: number
    order?: number
    createdAt: string
    updatedAt: string
}

export interface IFormatedExercise extends IExercise {
}

export interface IExercisesState {
    fetchStatus: IFetchStatus
    entitiesStatus: IEntitiesStatus
    entities: IExercise[]
}
