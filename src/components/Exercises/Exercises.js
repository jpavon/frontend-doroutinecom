import React from 'react'

import Transition from 'components/Transition'
import Button from 'components/Button'

import './style.css'

const Exercises = ({children, create, workoutId}) => (
    <div className="exercises-container">
        <Transition className="exercise">
            {children}
        </Transition>
        <div className="exercises-button-create">
            <Button
                small
                onClick={() => create(workoutId)}
            >
                New exercise
            </Button>
        </div>
    </div>
)

export default Exercises
