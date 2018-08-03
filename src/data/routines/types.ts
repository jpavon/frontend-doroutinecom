import { StateMap } from 'data/types'
import * as actions from 'data/routines/actions'

export interface Routine {
    id: number
    userId: number
    name: string | null
    notes: string | null
    createdAt: string
    updatedAt: string
    program?: {
        id: number
        name: string | null
        content: string | null
    } | null
}

export type RoutinesState = StateMap<Routine>

export type RoutinesAction = ReturnType<typeof actions[keyof typeof actions]>

export type RoutineRequestData = Partial<Routine>
