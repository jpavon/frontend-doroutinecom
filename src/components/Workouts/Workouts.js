import React from 'react'
import Button from 'components/Button'
import Section from 'components/Section'
import Transition from 'components/Transition'

import './style.css'

const Workouts = ({children, create, isLoading}) => (
    <Section headerSmall title="Workouts" className="workouts-container">
        <div className="workouts-button-create">
            <Button
                onClick={create}
                disabled={isLoading}
            >
                New workout
            </Button>
        </div>

        <div className="workouts-row">
            <Transition className="workouts-column">
                {children}
            </Transition>
        </div>
    </Section>
)

export default Workouts
