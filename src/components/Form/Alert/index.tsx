import * as React from 'react'

import './style.scss'

interface IAlertProps {
    message: string | null
}

const Alert: React.SFC<IAlertProps> = (props) => {
    return props.message ? (
        <span className="form-alert">{props.message}</span>
    ) : null
}

export default Alert
