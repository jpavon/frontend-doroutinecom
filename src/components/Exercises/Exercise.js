import React, { Fragment } from 'react'

import AutoSaveForm from 'components/AutoSaveForm'
import Button from 'components/Button'
import FieldGroup from 'components/AutoSaveForm/FieldGroup'

const Exercise = ({children, exercise, lifts, update, remove, isDeleting}) => (
    <Fragment>
        <AutoSaveForm
            update={update}
            initialValues={exercise}
            render={() => (
                <div className="exercise-form">
                    <FieldGroup
                        component="select"
                        label="Lift"
                        id="liftId"
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
            <Button
                danger
                onClick={() => remove(exercise.id)}
                disabled={isDeleting}
            >
                Remove
            </Button>
        </div>
    </Fragment>
)

export default Exercise
