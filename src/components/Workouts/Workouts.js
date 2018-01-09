import React from 'react'
import Button from 'components/Button'
import Section from 'components/Section'
import Transition from 'components/Transition'

import './style.css'

const Workouts = ({children, create, isLoading}) => (
    <Section headerSmall title="Workouts" className="workouts-container">
        <Button
            className="workouts-button-create"
            onClick={create}
            disabled={isLoading}
        >
            New workout
        </Button>

        <div className="workouts-row">
            <Transition className="workouts-column">
                {children}
            </Transition>
        </div>
    </Section>
)

export default Workouts
