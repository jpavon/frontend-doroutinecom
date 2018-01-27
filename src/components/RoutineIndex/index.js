import React, { Fragment } from 'react'

import AutoSaveForm from 'components/AutoSaveForm'
import FieldGroup from 'components/AutoSaveForm/FieldGroup'

import './style.css'

const RoutineIndex = ({children, routine, update}) => (
    <div className="routine-single">
        <AutoSaveForm
            initialValues={routine}
            update={update}
            render={({values}) => (
                <Fragment>
                    <div className="routine-single-title">
                        <FieldGroup
                            label="Name"
                            id={`name${values.id}`}
                            name="name"
                            placeholder="Type your routine name."
                        />
                    </div>
                </Fragment>
            )}
        />
        {children}
    </div>
)

export default RoutineIndex
