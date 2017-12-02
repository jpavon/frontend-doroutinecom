import React from 'react'

import Form from 'components/Exercises/Form'
import ButtonIcon from 'components/ButtonIcon'

const Exercises = ({children, exercise, lifts, updateExercise, removeExercise}) => (
    <div className="exercise">
        <Form
            update={updateExercise}
            data={exercise}
            lifts={lifts}
        />
        {children}
        <div className="exercise-button-remove">
            <ButtonIcon
                remove
                danger
                onClick={() => removeExercise(exercise.id)}
            >
                &nbsp;Exercise
            </ButtonIcon>
        </div>
    </div>
)

export default Exercises
