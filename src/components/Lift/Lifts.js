import React from 'react'
import Button from 'components/Button'

import './style.css'

const Lifts = ({children, ui, handleCreate}) => (
    <div className="lifts-container">
        <h2>Lifts</h2>

        <div className="lifts">
            {children}
        </div>

        <div className="lifts-create-button">
            <Button onClick={handleCreate}>Create a new lift</Button>
        </div>
    </div>
)

export default Lifts
