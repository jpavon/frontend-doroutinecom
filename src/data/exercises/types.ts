import { IStateMap, IActionMap, IDataRequestMap } from 'data/types'

export interface IExercise {
    id: number
    userId: number
    liftId?: number
    workoutId?: number
    routineId?: number
    order?: number | null
    createdAt: string
    updatedAt: string
}

export interface IFormatedExercise extends IExercise {
}

export type IExercisesState = IStateMap<IExercise>

export type IExercisesAction = IActionMap<IExercise>

export type IExerciseRequestData = IDataRequestMap<IExercise>
