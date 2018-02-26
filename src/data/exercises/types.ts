import { FetchStatus, IEntitiesStatus } from 'data/types'

export interface Exercise {
    id: number
    userId: number
    liftId?: number
    workoutId?: number
    routineId?: number
    order?: number
    createdAt: string
    updatedAt: string
}

export interface FormatedExercise extends Exercise {
}

export interface ExercisesState {
    fetchStatus: FetchStatus
    entitiesStatus: IEntitiesStatus
    entities: Exercise[]
}
