import * as moment from 'moment'
import { extendMoment } from 'moment-range'

export const serverDateFormat = 'YYYY-MM-DD HH:mm:ss'

export const timeFormat = 'HH:mm:ss'

const localeData = moment.localeData() // update when app with multiple languages
export const longDateFormat = `dddd - ${localeData.longDateFormat('ll')}`

export const now = () => {
    return moment().format(serverDateFormat)
}

export const formatDuration = (started: string, completed: string) => {
    const startTime = moment(started)
    const endTime = moment(completed)
    const duration = moment.duration(endTime.diff(startTime))
    const hours = parseInt('' + duration.asHours(), 10)
    const minutes = parseInt('' + duration.asMinutes(), 10) - hours * 60

    let format = minutes + ' ' + (minutes === 1 ? 'minute' : 'minutes')

    if (hours > 0) {
        format =
            hours + ' ' + (hours === 1 ? 'hour' : 'hours') + ' and ' + format
    }

    return !(hours < 0) && !(minutes < 0) ? format : null
}

// graphs

export const graphWeeklyRanges = (userMoment: typeof moment) => {
    const momentRange = extendMoment(userMoment)

    return [0, 1, 2, 3, 4].map((id) => {
        const startWeek = userMoment()
            .subtract(id, 'weeks')
            .startOf('week')
        const endWeek = userMoment()
            .subtract(id, 'weeks')
            .endOf('week')

        return {
            range: momentRange().range(startWeek, endWeek),
            startWeek,
            endWeek
        }
    })
}

export const graphWeeklyData = (dates: string[], userMoment: typeof moment) => {
    const dataset = [0, 0, 0, 0, 0]

    dates.forEach((date) => {
        graphWeeklyRanges(userMoment).forEach((week, i) => {
            if (date && week.range.contains(moment(date))) {
                dataset[i] = dataset[i] + 1
            }
        })
    })

    if (Math.max(...dataset) === 0) {
        return []
    }

    return dataset
}
