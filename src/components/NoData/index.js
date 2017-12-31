import React from 'react'

import Button from 'components/Button'

import './style.css'

const NoData = ({buttonText, text, create}) => (
    <div className="no-data">
        <p>{text}</p>
        <div className="no-data-button">
            <Button onClick={create}>{buttonText}</Button>
        </div>
    </div>
)

export default NoData
