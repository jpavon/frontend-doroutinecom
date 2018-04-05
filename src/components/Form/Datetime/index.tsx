import * as React from 'react'
import * as ReactDatetime from 'react-datetime'

import moment from 'utils/moment'
import { dateFormat, timeFormat } from 'utils/date'

import './style.scss'

export interface IDatetimeProps extends ReactDatetime.DatetimepickerProps {
    id: string
    name: string
}

const Datetime: React.SFC<IDatetimeProps> = ({value, name, ...rest}) => (
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
