import React from 'react'

import Section from 'components/Section'
import Button from 'components/Button'

import './style.css'

const WorkoutsBlocks = ({children, handleCreate}) => (
    <Section title="Training blocks" className="workouts-blocks-container">
        <div className="workouts-blocks">
            {children}
        </div>

        <div className="workouts-blocks-button-create">
            <Button onClick={handleCreate} className="button-small">New Block</Button>
        </div>
    </Section>
)

export default WorkoutsBlocks
