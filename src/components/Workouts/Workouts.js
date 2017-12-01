import React from 'react'
import Button from 'components/Button'

import './style.css'

const Workouts = ({children, handleCreate}) => (
    <div className="workouts-container">
        <Button className="workouts-button-create" onClick={handleCreate}>Create a new workout</Button>

        <div className="workouts-row">
            {children}
        </div>
        <br />
    </div>
)

export default Workouts
