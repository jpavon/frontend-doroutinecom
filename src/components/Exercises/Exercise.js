import React, { Fragment } from 'react'

import AutoSaveForm from 'components/AutoSaveForm'
import Button from 'components/Button'
import Select from 'components/AutoSaveForm/Select'

const Exercise = ({children, exercise, lifts, update, remove, isDeleting}) => (
    <Fragment>
        <AutoSaveForm
            update={update}
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
            <Button
                minus
                transparent
                danger
                onClick={() => remove(exercise.id)}
                disabled={isDeleting}
            >
                Exercise
            </Button>
        </div>
    </Fragment>
)

export default Exercise
