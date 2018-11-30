import { RouterState } from 'connected-react-router'
import { UserState } from 'data/user/types'
import { ExercisesState } from 'data/exercises/types'
import { LiftsState } from 'data/lifts/types'
import { RoutinesState } from 'data/routines/types'
import { SetsState } from 'data/sets/types'
import { WorkoutsState } from 'data/workouts/types'
import { UiState } from 'data/ui/types'

export interface RootState {
    user: UserState
    exercises: ExercisesState
    lifts: LiftsState
    routines: RoutinesState
    sets: SetsState
    workouts: WorkoutsState
    ui: UiState
    router: RouterState
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

export enum Status {
    STATUS_NONE = 'NONE',
    STATUS_LOADING = 'LOADING',
    STATUS_LOADED = 'LOADED',
    STATUS_FAILED = 'FAILED',
    STATUS_UPDATING = 'UPDATING',
    STATUS_DELETING = 'DELETING'
}

export type EntitiesStatus = Record<number, Status>

export interface StateMap<T> {
    status: Status
    entities: Record<number, T>
    entitiesStatus: EntitiesStatus
    entitiesOrder: number[]
    error: ApiFailure | null
}
