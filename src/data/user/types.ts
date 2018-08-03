import { ApiFailure } from 'data/types'
import { statusConstants } from 'data/constants'
import * as actions from 'data/user/actions'

export interface User {
    id: number
    name: string
    email: string
    apiToken: string
    weightMeasure: string
    startOfWeek: string
    dateFormat: string
    createdAt: string
    updatedAt: string
}

export interface Auth {
    token: string
}

export interface UserState {
    status: statusConstants
    isAuth: boolean
    entity: User | null
    error: ApiFailure | null
}

export type UserRequestData = Partial<User>

export type UserAction = ReturnType<typeof actions[keyof typeof actions]>

export interface LoginData {
    email: string
    password: string
}

export interface RegisterData {
    name: string
    email: string
    password: string
    passwordConfirmation: string
}

export interface PasswordForgottenData {
    email: string
}

export interface PasswordResetData {
    token: string
    email: string
    password: string
    passwordConfirmation: string
}
