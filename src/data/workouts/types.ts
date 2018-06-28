import { IStateMap } from 'data/types'
import * as actions from 'data/workouts/actions'

export interface IWorkout {
    id: number
    userId: number
    routineId: number | null
    name: string | null
    startedAt: string
    completedAt: string | null
    notes: string | null
    createdAt: string
    updatedAt: string
}

export type IWorkoutsState = IStateMap<IWorkout>

export type IWorkoutsAction = ReturnType<typeof actions[keyof typeof actions]>

export type IWorkoutRequestData = Partial<IWorkout & { workoutId: number }>

export interface IWorkoutFromRequestData {
    workoutId?: number
    routineId: number | null
    startedAt: string
}
