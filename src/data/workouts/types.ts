import { StateMap } from 'data/types'
import * as actions from 'data/workouts/actions'

export interface Workout {
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

export type WorkoutsState = StateMap<Workout>

export type WorkoutsAction = ReturnType<typeof actions[keyof typeof actions]>

export type WorkoutRequestData = Partial<Workout & { workoutId: number }>

export interface WorkoutFromRequestData {
    workoutId?: number
    routineId: number | null
    startedAt: string
}
