import { IStateMap, IActionMap, IDataRequestMap } from 'data/types'
import { IFormatedRoutine } from 'data/routines/types'

export interface IWorkout {
    id: number
    userId: number
    routineId: number
    name: string | null
    startedAt: string
    completedAt: string | null
    notes: string | null
    createdAt: string
    updatedAt: string
}

export interface IFormatedWorkout extends IWorkout {
    displayName: string | null
    duration: string | null
    day: string | null
    routine: IFormatedRoutine | null
}

export type IWorkoutsState = IStateMap<IWorkout>

export type IWorkoutsAction = IActionMap<IWorkout>

export type IWorkoutRequestData = IDataRequestMap<IWorkout & {workoutId: number}>

export interface IWorkoutFromRequestData {
    workoutId?: number
    routineId: number | null
    startedAt: string
}
