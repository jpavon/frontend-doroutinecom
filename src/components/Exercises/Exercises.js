import React from 'react'

import Button from 'components/Button'

import './style.css'

const Exercises = ({children, create, workoutId}) => (
    <div className="exercises-container">
        {children}
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
