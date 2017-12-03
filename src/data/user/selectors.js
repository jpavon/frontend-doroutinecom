import { createSelector } from 'reselect'

import User from 'data/user/schema'

const formatUser = (user) => User({
    ...user
})

export const userSelector = createSelector(
    [
        state => state.user.entity
    ],
    (user) => formatUser(user)
)
