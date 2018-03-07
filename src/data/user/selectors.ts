import { createSelector } from 'reselect'

import { IUser, IFormatedUser } from 'data/user/types'
import { IRootState } from 'data/types'

const formatUser = (user: IUser): IFormatedUser => ({
    ...user
})

export const userSelector = createSelector(
    [
        (state: IRootState) => state.user.entity
    ],
    (user): IUser | null => user && formatUser(user)
)
