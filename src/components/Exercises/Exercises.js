import React from 'react'

import Button from 'components/Button'

import './style.css'

const Exercises = ({children, createExercise, workoutId}) => (
    <div className="exercises-container">
        {children}
        <div className="exercises-button-create">
            <Button onClick={() => createExercise(workoutId)}>New exercise</Button>
        </div>
    </div>
)

export default Exercises
