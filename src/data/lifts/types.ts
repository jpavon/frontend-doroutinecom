import { StateMap } from 'data/types'
import * as actions from 'data/lifts/actions'

export interface Lift {
    id: number
    userId: number
    name: string | null
    createdAt: string
    updatedAt: string
}

export type LiftsState = StateMap<Lift>

export type LiftsAction = ReturnType<typeof actions[keyof typeof actions]>

export type LiftRequestData = Partial<Lift>
