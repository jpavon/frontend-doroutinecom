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
            <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
            </div>
        )
    } else {
        return null
    }
}

export default Loading
