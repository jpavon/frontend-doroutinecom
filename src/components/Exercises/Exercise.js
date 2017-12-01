import React from 'react'

import Form from 'components/Exercises/Form'
import Button from 'components/Button'

const Exercises = ({children, exercise, lifts, updateExercise, removeExercise}) => (
    <div className="exercise">
        <Form
            update={updateExercise}
            data={exercise}
            lifts={lifts}
        />
        {children}
        <Button danger onClick={() => removeExercise(exercise.id)}>Remove exercise</Button>
    </div>
)

export default Exercises
