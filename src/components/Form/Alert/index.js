import React from 'react'

import './style.css'

const Alert = ({message}) => {
    return message ? (
        <span className="form-alert">
            {message}
        </span>
    ) : null
}

export default Alert
