import { IUser, IUserState } from 'data/user/types'
import { IExercise, IExercisesState } from 'data/exercises/types'
import { ILift, ILiftsState } from 'data/lifts/types'
import { IRoutine, IRoutinesState } from 'data/routines/types'
import { ISet, ISetsState } from 'data/sets/types'
import { IWorkout, IWorkoutsState } from 'data/workouts/types'
import { IUiState } from 'data/ui/types'
import * as constants from 'data/constants'

export const StatusType = {}

export interface IRootState {
    user: IUserState
    exercises: IExercisesState
    lifts: ILiftsState
    routines: IRoutinesState
    sets: ISetsState
    workouts: IWorkoutsState
    ui: IUiState
}

export type ICrudStateItem =
    IExercisesState |
    ILiftsState |
    IRoutinesState |
    ISetsState |
    IWorkoutsState

export type ICrudDataItem =
    IExercise |
    ILift |
    IRoutine |
    ISet |
    IWorkout

export type ICrudFetchSuccess =
    IExercise[] |
    ILift[] |
    IRoutine[] |
    ISet[] |
    IWorkout[]

export type IFetchStatus =
    constants.STATUS_NONE |
    constants.STATUS_LOADING |
    constants.STATUS_LOADED |
    constants.STATUS_FAILED |
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

export type IApiSuccess =
    IUser |
    IExercise[] | IExercise |
    ILift[] | ILift |
    IRoutine[] | IRoutine |
    ISet[] | ISet |
    IWorkout[] | IWorkout

export interface ISuccessAction extends IAction {
    payload: IApiSuccess
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
    [index: number]: string
}

export type IDataRequestMap<T> = { [P in keyof T]?: T[P] }

export interface IStateMap<T> {
    fetchStatus: IFetchStatus
    entitiesStatus: IEntitiesStatus
    entities: T[]
    error: IApiFailure | null
}

export interface IActionMap<T> extends IAction {
    id: number
    payload: T | T[]
    error: IApiFailure
}
