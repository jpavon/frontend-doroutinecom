import { UserState } from 'data/user/types'
import { ExercisesState } from 'data/exercises/types'
import { LiftsState } from 'data/lifts/types'
import { RoutinesState } from 'data/routines/types'
import { SetsState } from 'data/sets/types'
import { WorkoutsState } from 'data/workouts/types'
import { UiState } from 'data/ui/types'
import { statusConstants } from 'data/constants'

export interface RootState {
    user: UserState
    exercises: ExercisesState
    lifts: LiftsState
    routines: RoutinesState
    sets: SetsState
    workouts: WorkoutsState
    ui: UiState
}

export interface Action {
    type: string
}

export interface ApiAction extends Action {
    method: string
    endpoint: string
    data: object
    resolve?: (payload: object) => void
    reject?: (error: object) => void
}

export interface SuccessAction<P> extends Action {
    payload: P
}

export interface ApiFailure {
    errors: Record<string, string[]>
    message: string
}

export interface FailureAction extends Action {
    error: ApiFailure
}

export type EntitiesStatus = Record<number, statusConstants>

export interface StateMap<T> {
    status: statusConstants
    entities: Record<number, T>
    entitiesStatus: EntitiesStatus
    entitiesOrder: number[]
    error: ApiFailure | null
}
