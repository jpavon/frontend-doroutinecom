import { IStateMap } from 'data/types'
import { IFormatedRoutine } from 'data/routines/types'
import * as actionTypes from 'data/workouts/actions'

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

export type IWorkoutsAction = ReturnType<typeof actionTypes[keyof typeof actionTypes]>

export type IWorkoutRequestData = Partial<IWorkout & {workoutId: number}>

export interface IWorkoutFromRequestData {
    workoutId?: number
    routineId: number | null
    startedAt: string
}

export interface IWorkoutActionArgs {
    post: (data: IWorkoutRequestData) => void
    postFrom: (data: IWorkoutFromRequestData) => void
    put: (id: number, data: IWorkoutRequestData, resolve?: () => void, reject?: () => void) => void
    delete: (id: number) => void
}
