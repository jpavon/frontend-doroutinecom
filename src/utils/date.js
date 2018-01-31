import moment from 'moment'

export const format = 'YYYY-MM-DD HH:mm:ss'

export const now = () => {
    return moment().format(format)
}
