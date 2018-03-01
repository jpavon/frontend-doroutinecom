// import PropTypes from 'prop-types'
import { IUser, IUserState } from 'data/user/types'
import { IExercise, IExercisesState } from 'data/exercises/types'
import { ILift, ILiftsState } from 'data/lifts/types'
import { IRoutine, IRoutinesState } from 'data/routines/types'
import { ISet, ISetsState } from 'data/sets/types'
import { IWorkout, IWorkoutsState } from 'data/workouts/types'
// import { IApiOptions } from 'utils/api'

// import {
//     STATUS_NONE,
//     STATUS_LOADING,
//     STATUS_LOADED,
//     STATUS_FAILED,
//     STATUS_UPDATING,
//     STATUS_DELETING
// } from 'data/utils'

export const StatusType = {}

export interface IRootState {
    user: IUserState
    exercises: IExercisesState
    lifts: ILiftsState
    routines: IRoutinesState
    sets: ISetsState
    workouts: IWorkoutsState
}

export type IFetchStatus =
    'NONE' |
    'LOADING' |
    'LOADED' |
    'FAILED' |
    'UPDATING' |
    'DELETING'

export interface IAction {
    type: string
}

export interface IApiAction extends IAction {
    data: object,
    reject?: () => void
}

export type IApiSuccess =
    IUser |
    IExercise[] |
    ILift[] |
    IRoutine[] |
    ISet[] |
    IWorkout[]

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

export interface IData {
    [index: number]: string | number
}
