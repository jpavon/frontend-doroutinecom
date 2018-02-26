import { createSelector } from 'reselect'
import { User, FormatedUser } from 'data/user/types'
import { RootState } from 'data/types'

const formatUser = (user: User): FormatedUser => ({
    ...user
})

export const userSelector = createSelector(
    [
        (state: RootState) => state.user.entity
    ],
    (user: User): FormatedUser => user && formatUser(user)
)
