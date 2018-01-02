import React from 'react'
import Button from 'components/Button'
import Section from 'components/Section'

import './style.css'

const Workouts = ({children, create}) => (
    <Section headerSmall title="Workouts" className="workouts-container">
        <Button
            className="workouts-button-create"
            onClick={create}
        >
            New workout
        </Button>

        <div className="workouts-row">
            {children}
        </div>
    </Section>
)

export default Workouts
