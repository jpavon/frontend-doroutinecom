import React, { Fragment } from 'react'

import AutoSaveForm from 'components/AutoSaveForm'
import Field from 'components/Field'

const WorkoutEdit = ({children, workout, update}) => (
    <div className="workout">
        <div className="workout-form">
            <AutoSaveForm
                initialValues={workout}
                update={update}
                render={({values}) => (
                    <div className="workout-form">
                        <Field
                            label="Name"
                            id={`name${values.id}`}
                            name="name"
                            placeholder="Type your workout name"
                        />
                        {values.completedAt &&
                            <Fragment>
                                <Field
                                    component="datetime"
                                    label="Started at"
                                    id={`startedAt${values.id}`}
                                    name="startedAt"
                                />
                                <Field
                                    component="datetime"
                                    label="Completed at"
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
                    <Field
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
