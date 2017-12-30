import React from 'react'

import AutoSaveForm from 'components/AutoSaveForm'
import ButtonIcon from 'components/ButtonIcon'
import Select from 'components/AutoSaveForm/Select'

const Exercises = ({children, exercise, lifts, updateExercise, removeExercise}) => (
    <div className="exercise">
        <AutoSaveForm
            update={updateExercise}
            initialValues={exercise}
            render={() => (
                <div className="exercise-form">
                    <Select
                        name="liftId"
                        options={lifts || []}
                        defaultOptionMessage="Select a lift..."
                        noOptionsMessage="No lift created."
                    />
                </div>
            )}
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
