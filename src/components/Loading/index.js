import React from 'react'
import ErrorApp from 'components/ErrorApp'

import './style.css'

const Loading = ({error, pastDelay, show}) => {
    if (error) {
        return (
            <ErrorApp />
        )
    } else if (pastDelay || show) {
        return (
            <div className="spinner"></div>
        )
    } else {
        return null
    }
}

export default Loading
