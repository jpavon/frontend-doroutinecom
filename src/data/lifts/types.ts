import { IStateMap, IActionMap } from 'data/types'

export interface ILift {
    id: number
    userId: number
    name: string | null
    createdAt: string
    updatedAt: string
}

export interface IFormatedLift extends ILift {
}

export type ILiftsState = IStateMap<ILift>

export type ILiftsAction = IActionMap<ILift>

export type ILiftRequestData = Partial<ILift>

export interface ILiftActionArgs {
    post: (data?: ILiftRequestData) => void
    put: (id: number, data: ILiftRequestData, resolve?: () => void, reject?: () => void) => void
    delete: (id: number) => void
}
