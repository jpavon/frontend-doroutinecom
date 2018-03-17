import * as React from 'react'

import { IFormatedWorkout, IWorkoutActionArgs } from 'data/workouts/types'

import AutoSaveForm, { IAutoSaveFormState } from 'components/AutoSaveForm'
import Datetime from 'components/AutoSaveForm/Datetime'
import Textarea from 'components/AutoSaveForm/Textarea'
import Field from 'components/Field'
import Button from 'components/Button'

import './style.css'

interface IWorkoutProps {
    workout: IFormatedWorkout
    update: IWorkoutActionArgs['put']
}

const Workout: React.SFC<IWorkoutProps> = ({children, workout, update}) => (
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
                render={({values}: IAutoSaveFormState) => (
                    values.completedAt ? (
                        <div className="workout-dates">
                            <Field label="Started at" id={`startedAt${values.id}`}>
                                <Datetime
                                    id={`startedAt${values.id}`}
                                    name="startedAt"
                                />
                            </Field>

                            <Field label="Completed at" id={`completedAt${values.id}`}>
                                <Datetime
                                    id={`completedAt${values.id}`}
                                    name="completedAt"
                                />
                            </Field>
                        </div>
                    ) : null
                )}
            />
        </div>

        {children}

        <div className="workout-form">
            <AutoSaveForm
                initialValues={workout}
                update={update}
                render={({values}: IAutoSaveFormState) => (
                    <Field label="Additional Notes" id={`notes${values.id}`}>
                        <Textarea
                            id={`notes${values.id}`}
                            name="notes"
                            placeholder="Type any extra exercises or annotations"
                        />
                    </Field>
                )}
            />
        </div>
    </div>
)

export default Workout
