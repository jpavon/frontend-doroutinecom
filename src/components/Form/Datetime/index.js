import React from 'react'
import ReactDatetime from 'react-datetime'

import moment from 'utils/moment'
import { localeDateFormat, timeFormat } from 'utils/date'

import './style.css'

const Datetime = ({value, ...rest}) => (
    <ReactDatetime
        dateFormat={localeDateFormat}
        timeFormat={timeFormat}
        value={moment(value).format(`${localeDateFormat} ${timeFormat}`)}
        inputProps={{
            readOnly: true
        }}
        {...rest}
    />
)

export default Datetime
