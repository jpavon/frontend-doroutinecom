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

export interface FormatedUser extends User {

}

export interface UserState {
    user: {
        entity: User
    }
}
