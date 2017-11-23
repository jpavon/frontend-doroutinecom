import React from 'react'
import Button from 'components/Button'

import './style.css'

const Lifts = ({children, ui, handleCreate}) => (
    <div className="lifts-container">
        <h2>
            Lifts
            <Button
                small
                className="lifts-button-create"
                onClick={handleCreate}
            >
                Create a new lift
            </Button>
        </h2>

        <div className="lifts">
            {children}
        </div>
    </div>
)

export default Lifts
