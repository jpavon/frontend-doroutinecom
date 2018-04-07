import { IStateMap } from 'data/types'
import * as actionTypes from 'data/exercises/actions'

export interface IExercise {
    id: number
    userId: number
    liftId: number | null
    workoutId: number | null
    routineId: number | null
    order: number | null
    createdAt: string
    updatedAt: string
}

export interface IFormatedExercise extends IExercise {
}

export type IExercisesState = IStateMap<IExercise>

export type IExercisesAction = ReturnType<typeof actionTypes[keyof typeof actionTypes]>

export type IExerciseRequestData = Partial<IExercise>

export interface IExerciseActionArgs {
    post: (data?: IExerciseRequestData) => void
    put: (id: number, data: IExerciseRequestData, resolve?: () => void, reject?: () => void) => void
    delete: (id: number) => void
}
