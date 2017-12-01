import React from 'react'
import Button from 'components/Button'

import './style.css'

const WorkoutsBlocks = ({children, handleCreate}) => (
    <div className="workouts-blocks-container">
        <h2 className="workouts-blocks-header">
            Routine
        </h2>

        <div className="workouts-blocks">
            {children}
        </div>

        <div className="workouts-blocks-button-create">
            <Button onClick={handleCreate} className="button-small">Create New Block</Button>
        </div>
    </div>
)

export default WorkoutsBlocks
