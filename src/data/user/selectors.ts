import { createSelector } from 'reselect'

import { IUser } from 'data/user/types'
import { IRootState } from 'data/types'

export const userSelector = createSelector(
    [(state: IRootState) => state.user.entity],
    (user): IUser | null => user
)
