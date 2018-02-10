import React, { Fragment } from 'react'

import AutoSaveForm from 'components/AutoSaveForm'
import Button from 'components/Button'
import Select from 'components/AutoSaveForm/Select'

const Exercise = ({children, exercise, lifts, update, remove, isDeleting, isRemoveButtonsVisible}) => (
    <Fragment>
        <AutoSaveForm
            update={update}
            initialValues={exercise}
            render={({values}) => (
                <div className="exercise-lift">
                    <Select
                        label="Lift"
                        id="liftId"
                        name="liftId"
                        options={lifts}
                        defaultOptionMessage="Select a lift"
                        noOptionsMessage="No lift created."
                    />
                    {values.liftId &&
                        <Button to={`/lifts/${values.liftId}`}>Lift info</Button>
                    }
                </div>
            )}
        />
        {children}
        {isRemoveButtonsVisible &&
            <div className="exercise-button-remove">
                <Button
                    remove
                    danger
                    onClick={() => remove(exercise.id)}
                    disabled={isDeleting}
                />
            </div>
        }
    </Fragment>
)

export default Exercise
