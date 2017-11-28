import { createSelector } from 'reselect'

const formatUser = (user) => ({
    ...user,
    isAuthenticated: !!user.id
})

export const userSelector = (blockId) => createSelector(
    [
        state => state.user
    ],
    (user) => formatUser(user)
)
