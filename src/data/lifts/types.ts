import { IStateMap } from 'data/types'
import * as actionTypes from 'data/lifts/actions'

export interface ILift {
    id: number
    userId: number
    name: string | null
    createdAt: string
    updatedAt: string
}

export type ILiftsState = IStateMap<ILift>

export type ILiftsAction = ReturnType<
    typeof actionTypes[keyof typeof actionTypes]
>

export type ILiftRequestData = Partial<ILift>
