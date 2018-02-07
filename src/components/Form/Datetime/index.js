import React from 'react'
import ReactDatetime from 'react-datetime'

import moment from 'utils/moment'
import { dateFormat, timeFormat } from 'utils/date'

import './style.css'

const Datetime = ({value, name, ...rest}) => (
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
