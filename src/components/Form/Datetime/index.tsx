import * as React from 'react'
import * as ReactDatetime from 'react-datetime'
import { Moment } from 'moment'

import moment from 'utils/moment'
import { dateFormat, timeFormat } from 'utils/date'

import './style.css'

export interface IDatetimeProps {
    id: string
    name: string
    value?: string
    onChange?: (moment: Moment) => void
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
