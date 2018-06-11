import { ActionType } from 'typesafe-actions'
import { IStateMap } from 'data/types'
import * as actions from 'data/exercises/actions'

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

export type IExercisesState = IStateMap<IExercise>

export type IExercisesAction = ActionType<typeof actions>

export type IExerciseRequestData = Partial<IExercise>
