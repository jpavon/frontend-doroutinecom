// import PropTypes from 'prop-types'
import { IUserState } from 'data/user/types'
import { IExercisesState } from 'data/exercises/types'
import { ILiftsState } from 'data/lifts/types'
import { IRoutinesState } from 'data/routines/types'
import { ISetsState } from 'data/sets/types'
import { IWorkoutsState } from 'data/workouts/types'
import { IApiOptions } from 'utils/api'

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
    request: IApiOptions
}

export interface IApiError {
    errors: {
        [index: string]: string[]
    }
    message: string
}

export interface IEntitiesStatus {
    [index: number]: string
}
