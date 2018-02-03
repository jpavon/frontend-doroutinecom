import moment from 'utils/moment'

export const dateFormat = 'YYYY-MM-DD'
export const timeFormat = 'HH:mm:ss'
export const format = `${dateFormat} ${timeFormat}`

let browserLocale
if (process.env.NODE_ENV === 'production') {
    browserLocale = window.navigator.userLanguage || window.navigator.language
} else {
    browserLocale = 'en-GB'
}

const localeData = moment.localeData(browserLocale === 'en-US' ? 'en-US' : 'en-GB')

export const localeDateFormat = localeData.longDateFormat('l')

// https://stackoverflow.com/questions/27360102/locale-and-specific-date-format-with-moment-js
export const localeDayMonthFormat = localeData.longDateFormat('l').replace(/Y/g,'').replace(/^\W|\W$|\W\W/,'')

export const localeLongDateFormat = `dddd - ${localeData.longDateFormat('ll')}`

export const now = () => {
    return moment().format(format)
}

export const formatDuration = (started, completed) => {
    const startTime = moment(started)
    const endTime = moment(completed)
    const duration = moment.duration(endTime.diff(startTime))
    const hours = parseInt(duration.asHours(), 10)
    const minutes = parseInt(duration.asMinutes(), 10) - hours * 60

    let string = minutes + ' ' + (minutes === 1 ? 'minute' : 'minutes')

    if (hours > 0) {
        string = hours + ' ' + (hours === 1 ? 'hour' : 'hours') + ' and ' + string
    }

    return (!(hours < 0) && !(minutes < 0)) ? string : null
}

export const formatDate = (date) => {
    const instance = moment(date)
    return instance.format(localeLongDateFormat)
}
