import React, { Fragment } from 'react'

import AutoSaveForm from 'components/AutoSaveForm'
import FieldGroup from 'components/AutoSaveForm/FieldGroup'

const WorkoutEdit = ({children, workout, update}) => (
    <div className="workout">
        <div className="workout-form">
            <AutoSaveForm
                initialValues={workout}
                update={update}
                render={({values}) => (
                    <div className="workout-form">
                        <FieldGroup
                            label="Name"
                            id={`name${values.id}`}
                            name="name"
                            placeholder="Type your workout name"
                        />
                        {values.completedAt &&
                            <Fragment>
                                <FieldGroup
                                    label="Started"
                                    id={`startedAt${values.id}`}
                                    name="startedAt"
                                />
                                <FieldGroup
                                    label="Completed"
                                    id={`completedAt${values.id}`}
                                    name="completedAt"
                                />
                            </Fragment>
                        }
                    </div>
                )}
            />
        </div>

        {children}

        <div className="workout-form">
            <AutoSaveForm
                initialValues={workout}
                update={update}
                render={({values}) => (
                    <FieldGroup
                        component="textarea"
                        label="Additional Notes"
                        id={`notes${values.id}`}
                        name="notes"
                        placeholder="Type any extra exercises or annotations"
                    />
                )}
            />
        </div>
    </div>
)

export default WorkoutEdit
