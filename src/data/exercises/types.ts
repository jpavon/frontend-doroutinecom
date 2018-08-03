import { StateMap } from 'data/types'
import * as actions from 'data/exercises/actions'

export interface Exercise {
    id: number
    userId: number
    liftId: number | null
    workoutId: number | null
    routineId: number | null
    order: number | null
    createdAt: string
    updatedAt: string
}

export type ExercisesState = StateMap<Exercise>

export type ExercisesAction = ReturnType<typeof actions[keyof typeof actions]>

export type ExerciseRequestData = Partial<Exercise>
