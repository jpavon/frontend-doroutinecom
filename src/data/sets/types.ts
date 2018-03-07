import { Moment } from 'moment'

import { IStateMap, IActionMap, IDataRequestMap } from 'data/types'

export interface ISet {
    id: number
    userId: number
    exerciseId: number
    reps: number
    weight: number
    isCompleted: boolean
    createdAt: string
    updatedAt: string
}

export interface IFormatedSet extends ISet {
}

export type ISetsState = IStateMap<ISet>

export type ISetsAction = IActionMap<ISet>

export interface ITopSet {
    workoutId: number
    liftId: number
    lift: string | null
    moment: Moment
    reps: number
    rm: number
    weight: number
    completedAt: string
}

export type ISetRequestData = IDataRequestMap<ISet>
