import * as React from 'react'

import { IWorkout } from 'data/workouts/types'
import { putWorkout } from 'data/workouts/actions'

import AutoSaveForm from 'components/AutoSaveForm'
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

const Workout: React.SFC<IWorkoutProps> = (props) => (
    <div className="workout">
        <div className="workout-routine-name">
            {props.routine ? (
                <>
                    <div>Routine</div>
                    <Button
                        to={
                            props.routine &&
                            `/routines/${props.workout.routineId}`
                        }
                    >
                        {props.displayName}
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
                initialValues={props.workout}
                update={props.update}
                render={() => (
                    <>
                        {!props.routine && (
                            <Field label="Name" id="name">
                                <Input id="name" name="name" />
                            </Field>
                        )}
                        {props.workout.completedAt && (
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

        {props.children}

        <div className="workout-form">
            <AutoSaveForm
                initialValues={props.workout}
                update={props.update}
                render={({ values }) => (
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
