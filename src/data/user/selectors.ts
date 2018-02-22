import { createSelector } from 'reselect'
import { UserState, User, FormatedUser } from 'data/user/types'

const formatUser = (user: User): FormatedUser => ({
    ...user
})

export const userSelector = createSelector(
    [
        (state: UserState) => state.user.entity
    ],
    (user: User) => Object.keys(user).length > 0 ? formatUser(user) : null
)
