import * as React from 'react'

import './style.css'

interface IAlertProps {
    message: string
}

const Alert: React.SFC<IAlertProps> = ({message}) => {
    return message ? (
        <span className="form-alert">
            {message}
        </span>
    ) : null
}

export default Alert
