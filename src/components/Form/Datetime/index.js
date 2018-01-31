import React from 'react'
import ReactDatetime from 'react-datetime'
import moment from 'moment'

import { dateFormat, timeFormat } from 'utils/date'

import './style.css'

const Datetime = ({value, ...rest}) => (
    <ReactDatetime
        dateFormat={dateFormat}
        timeFormat={timeFormat}
        value={moment(value)}
        {...rest}
    />
)

export default Datetime
