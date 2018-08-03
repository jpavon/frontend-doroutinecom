import { Moment as MomentType } from 'moment'
import { StateMap } from 'data/types'
import * as actions from 'data/sets/actions'

export interface Set {
    id: number
    userId: number
    exerciseId: number
    reps: number | null
    weight: number | null
    isCompleted: boolean
    createdAt: string
    updatedAt: string
}

export type SetsState = StateMap<Set>

export type SetsAction = ReturnType<typeof actions[keyof typeof actions]>

export interface TopSet {
    reps: number
    rm: number
    weight: number
    completedAt: string
    completeAtMoment: MomentType
    workoutId: number
    liftId: number
    lift: string | null
}

export type SetRequestData = Partial<Set>
