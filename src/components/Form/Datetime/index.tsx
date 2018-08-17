import * as React from 'react'
import * as ReactDatetime from 'react-datetime'
import * as moment from 'moment'

import { timeFormat } from 'utils/date'

import { dateTimeStyles } from './style'
dateTimeStyles()

export interface DatetimeProps extends ReactDatetime.DatetimepickerProps {
    id: string
    name: string
    dateFormat: string
}

const Datetime: React.SFC<DatetimeProps> = ({
    value,
    name,
    dateFormat,
    ...rest
}) => (
    <ReactDatetime
        dateFormat={dateFormat}
        timeFormat={timeFormat}
        value={moment(value).format(`${dateFormat} ${timeFormat}`)}
        inputProps={{
            readOnly: true,
            name
        }}
        {...rest}
    />
)

export default Datetime
