import * as React from 'react'

import './style.scss'

interface IAlertProps {
    message: string | null
}

const Alert: React.SFC<IAlertProps> = ({ message }) => {
    return message ? <span className="form-alert">{message}</span> : null
}

export default Alert
