import { IStateMap, IActionMap, IDataRequestMap } from 'data/types'
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

export type IWorkoutsState = IStateMap<IWorkout>

export type IWorkoutsAction = IActionMap<IWorkout>

export type IWorkoutRequestData = IDataRequestMap<IWorkout & {workoutId: number}>

export interface IWorkoutFromRequestData {
    workoutId?: number
    routineId: number | null
    startedAt: string
}
