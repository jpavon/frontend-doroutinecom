import React, { Fragment } from 'react'

import AutoSaveForm from 'components/AutoSaveForm'
import ButtonIcon from 'components/ButtonIcon'
import Select from 'components/AutoSaveForm/Select'

const Exercise = ({children, exercise, lifts, update, remove}) => (
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
            <ButtonIcon
                remove
                danger
                onClick={() => remove(exercise.id)}
            >
                &nbsp;Exercise
            </ButtonIcon>
        </div>
    </Fragment>
)

export default Exercise
