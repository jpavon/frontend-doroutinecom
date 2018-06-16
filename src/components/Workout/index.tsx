import * as React from 'react'

import { IWorkout } from 'data/workouts/types'
import { putWorkout } from 'data/workouts/actions'

import AutoSaveForm, { IAutoSaveFormState } from 'components/AutoSaveForm'
import Datetime from 'components/AutoSaveForm/Datetime'
import Input from 'components/AutoSaveForm/Input'
import Textarea from 'components/AutoSaveForm/Textarea'
import Field from 'components/Field'
import Button from 'components/Button'

import './style.scss'
import { IRoutine } from 'data/routines/types'

interface IWorkoutProps {
    workout: IWorkout
    displayName: string | null
    routine: IRoutine | null
    update: typeof putWorkout
}

const Workout: React.SFC<IWorkoutProps> = ({
    children,
    workout,
    update,
    displayName,
    routine
}) => (
    <div className="workout">
        <div className="workout-routine-name">
            {routine ? (
                <>
                    <div>Routine</div>
                    <Button to={routine && `/routines/${workout.routineId}`}>
                        {displayName}
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
                render={() => (
                    <>
                        {!routine && (
                            <Field label="Name" id="name">
                                <Input id="name" name="name" />
                            </Field>
                        )}
                        {workout.completedAt && (
                            <div className="workout-dates">
                                <Field label="Started at" id="startedAt">
                                    <Datetime id="startedAt" name="startedAt" />
                                </Field>

                                <Field label="Completed at" id="completedAt">
                                    <Datetime
                                        id="completedAt"
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
