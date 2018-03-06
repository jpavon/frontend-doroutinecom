import { IStateMap, IActionMap, IDataRequestMap } from 'data/types'

export interface ILift {
    id: number
    userId: number
    name?: string
    createdAt: string
    updatedAt: string
}

export interface IFormatedLift extends ILift {
}

export type ILiftsState = IStateMap<ILift>

export type ILiftsAction = IActionMap<ILift>

export type ILiftRequestData = IDataRequestMap<ILift>
