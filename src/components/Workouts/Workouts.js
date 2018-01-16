import React from 'react'
import Button from 'components/Button'
import Transition from 'components/Transition'

import './style.css'

const Workouts = ({children, create}) => (
    <div className="workouts-container">
        <div className="workouts-button-create">
            <Button
                onClick={create}
            >
                New workout
            </Button>
        </div>

        <div className="workouts-row">
            <Transition className="workouts-column">
                {children}
            </Transition>
        </div>
    </div>
)

export default Workouts
