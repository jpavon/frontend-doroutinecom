import { createSelector } from 'reselect'

const formatUser = (user: {}) => ({
    ...user
})

export const userSelector = createSelector(
    [
        (state: { user: { entity: {}} }) => state.user.entity
    ],
    (user) => Object.keys(user).length > 0 ? formatUser(user) : null
)
