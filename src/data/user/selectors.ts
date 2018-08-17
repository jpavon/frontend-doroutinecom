import { createSelector } from 'reselect'
import * as moment from 'moment'

import { User } from 'data/user/types'
import { RootState } from 'data/types'

export const userSelector = createSelector(
    [(state: RootState) => state.user.entity],
    (user): User | null => user
)

export const userMomentSelector = createSelector(
    [(state: RootState) => state.user.entity],
    (user): typeof moment => {
        const userMoment = moment
        userMoment.updateLocale('en', {
            week: {
                dow: user && user.startOfWeek === 'monday' ? 1 : 0,
                doy: 4
            }
        })
        return userMoment
    }
)

export const dateFormatSelector = createSelector(
    [(state: RootState) => state.user.entity],
    (user): string => {
        if (user && user.dateFormat === 'DD/MM/YYYY') {
            return 'D/M/YYYY'
        } else if (user && user.dateFormat === 'MM/DD/YYYY') {
            return 'MM/DD/YYYY'
        } else {
            return 'YYYY/M/D'
        }
    }
)

export const dayMonthFormatSelector = createSelector(
    [dateFormatSelector],
    (dateFormat): string => {
        // https://stackoverflow.com/questions/27360102/locale-and-specific-date-format-with-moment-js
        // ex. 23/7
        return dateFormat.replace(/Y/g, '').replace(/^\W|\W$|\W\W/, '')
    }
)
