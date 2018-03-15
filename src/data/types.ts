import { IUserState } from 'data/user/types'
import { IExercisesState } from 'data/exercises/types'
import { ILiftsState } from 'data/lifts/types'
import { IRoutinesState } from 'data/routines/types'
import { ISetsState } from 'data/sets/types'
import { IWorkoutsState } from 'data/workouts/types'
import { IUiState } from 'data/ui/types'
import * as constants from 'data/constants'

export interface IRootState {
    user: IUserState
    exercises: IExercisesState
    lifts: ILiftsState
    routines: IRoutinesState
    sets: ISetsState
    workouts: IWorkoutsState
    ui: IUiState
}

export type IFetchStatusType =
    constants.STATUS_NONE |
    constants.STATUS_LOADING |
    constants.STATUS_LOADED |
    constants.STATUS_FAILED

export type IEntitiesStatusType =
    constants.STATUS_LOADED |
    constants.STATUS_UPDATING |
    constants.STATUS_DELETING

export interface IAction {
    type: string
}

export interface IApiAction extends IAction {
    method: string
    endpoint: string
    data: object
    resolve?: (payload: object) => void
    reject?: (error: object) => void
}

export interface ISuccessAction<P> extends IAction {
    payload: P
}

export interface IApiFailure {
    errors: {
        [index: string]: string[]
    }
    message: string
}

export interface IFailureAction extends IAction {
    error: IApiFailure
}

export interface IEntitiesStatus {
    [index: number]: IEntitiesStatusType
}

export type IDataRequestMap<T> = { [P in keyof T]?: T[P] }

export interface IStateMap<T> {
    fetchStatus: IFetchStatusType
    entitiesStatus: IEntitiesStatus
    entities: T[]
    error: IApiFailure | null
}

export interface IActionMap<T> extends IAction {
    id: number
    payload: T | T[]
    error: IApiFailure
}
