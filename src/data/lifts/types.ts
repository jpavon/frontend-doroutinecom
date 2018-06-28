import { IStateMap } from 'data/types'
import * as actions from 'data/lifts/actions'

export interface ILift {
    id: number
    userId: number
    name: string | null
    createdAt: string
    updatedAt: string
}

export type ILiftsState = IStateMap<ILift>

export type ILiftsAction = ReturnType<typeof actions[keyof typeof actions]>

export type ILiftRequestData = Partial<ILift>
