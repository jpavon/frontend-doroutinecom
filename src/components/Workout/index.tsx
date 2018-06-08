import * as React from 'react'

import { IFormatedWorkout } from 'data/workouts/types'
import { putWorkout } from 'data/workouts/actions'

import AutoSaveForm, { IAutoSaveFormState } from 'components/AutoSaveForm'
import Datetime from 'components/AutoSaveForm/Datetime'
import Input from 'components/AutoSaveForm/Input'
import Textarea from 'components/AutoSaveForm/Textarea'
import Field from 'components/Field'
import Button from 'components/Button'

import './style.scss'

interface IWorkoutProps {
    workout: IFormatedWorkout
    update: typeof putWorkout
}

const Workout: React.SFC<IWorkoutProps> = ({ children, workout, update }) => (
    <div className="workout">
        <div className="workout-routine-name">
            {workout.routine ? (
                <>
                    <div>Routine</div>
                    <Button
                        to={workout.routine && `/routines/${workout.routineId}`}
                    >
                        {workout.displayName}
                    </Button>
                </>
            ) : (
                <div className="workout-routine-name-deleted">
                    Routine for this workout has been deleted.
                </div>
            )}
        </div>
        <div className="workout-form">
            <AutoSaveForm
                initialValues={workout}
                update={update}
                render={({ values }: IAutoSaveFormState) => (
                    <>
                        {!workout.routine && (
                            <Field label="Name" id="name">
                                <Input id="name" name="name" />
                            </Field>
                        )}
                        {values.completedAt && (
                            <div className="workout-dates">
                                <Field
                                    label="Started at"
                                    id={`startedAt${values.id}`}
                                >
                                    <Datetime
                                        id={`startedAt${values.id}`}
                                        name="startedAt"
                                    />
                                </Field>

                                <Field
                                    label="Completed at"
                                    id={`completedAt${values.id}`}
                                >
                                    <Datetime
                                        id={`completedAt${values.id}`}
                                        name="completedAt"
                                    />
                                </Field>
                            </div>
                        )}
                    </>
                )}
            />
        </div>

        {children}

        <div className="workout-form">
            <AutoSaveForm
                initialValues={workout}
                update={update}
                render={({ values }: IAutoSaveFormState) => (
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
