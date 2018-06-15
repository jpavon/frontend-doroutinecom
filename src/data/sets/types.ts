import { Moment as MomentType } from 'moment'
import { IStateMap } from 'data/types'
import * as actionTypes from 'data/sets/actions'

export interface ISet {
    id: number
    userId: number
    exerciseId: number
    reps: number | null
    weight: number | null
    isCompleted: boolean
    createdAt: string
    updatedAt: string
}

export type ISetsState = IStateMap<ISet>

export type ISetsAction = ReturnType<
    typeof actionTypes[keyof typeof actionTypes]
>

export interface ITopSet {
    reps: number
    rm: number
    weight: number
    completedAt: string
    completeAtMoment: MomentType
    workoutId: number
    liftId: number
    lift: string | null
}

export type ISetRequestData = Partial<ISet>
