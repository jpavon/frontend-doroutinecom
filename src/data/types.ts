// import PropTypes from 'prop-types'
import { UserState } from 'data/user/types'
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
}

export type Status =
    'NONE' |
    'LOADING' |
    'LOADED' |
    'FAILED' |
    'UPDATING' |
    'DELETING'

export interface Action {
    type: string
    payload: {}
    error: {}
}
