// import PropTypes from 'prop-types'
import { UserState } from 'data/user/types'
import { ExercisesState } from 'data/exercises/types'
import { LiftsState } from 'data/lifts/types'
import { RoutinesState } from 'data/routines/types'
import { SetsState } from 'data/sets/types'
import { WorkoutsState } from 'data/workouts/types'
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

export interface RootState {
    user: UserState
    exercises: ExercisesState
    lifts: LiftsState
    routines: RoutinesState
    sets: SetsState
    workouts: WorkoutsState
}

export type FetchStatus =
    'NONE' |
    'LOADING' |
    'LOADED' |
    'FAILED' |
    'UPDATING' |
    'DELETING'

export interface Action {
    type: string
}

export interface ApiAction extends Action {
    options: IApiOptions
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
