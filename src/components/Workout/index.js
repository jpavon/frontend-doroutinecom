import React from 'react'

import AutoSaveForm from 'components/AutoSaveForm'
import Field from 'components/Field'
import Button from 'components/Button'

import './style.css'

const WorkoutEdit = ({children, workout, update}) => (
    <div className="workout">
        <div className="workout-routine-name">
            <div>Routine</div>
            <Button to={workout.routine && `/routines/${workout.routineId}`}>
                {workout.displayName}
            </Button>
            {!workout.routine &&
                <div className="workout-routine-name-deleted">Deleted</div>
            }
        </div>
        <div className="workout-form">
            <AutoSaveForm
                initialValues={workout}
                update={update}
                render={({values}) => (
                    values.completedAt &&
                        <div className="workout-dates">
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
