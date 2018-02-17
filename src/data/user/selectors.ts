import { createSelector } from 'reselect'

import { User } from 'data/user/types'

const formatUser = (user: {}): User => ({
    ...user,
    id: 1,
})

export const userSelector = createSelector(
    [
        state => (state as { user: { entity: {}} }).user.entity
    ],
    (user) => Object.keys(user).length > 0 && formatUser(user)
)
