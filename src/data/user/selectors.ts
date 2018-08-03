import { createSelector } from 'reselect'

import { User } from 'data/user/types'
import { RootState } from 'data/types'

export const userSelector = createSelector(
    [(state: RootState) => state.user.entity],
    (user): User | null => user
)
