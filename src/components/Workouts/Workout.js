import React, { Fragment } from 'react'
import classNames from 'classnames'

import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import Checkbox from 'components/AutoSaveForm/Checkbox'
import Label from 'components/Form/Label'
import ButtonIcon from 'components/ButtonIcon'

const Workout = ({children, workout, updateWorkout, removeWorkout}) => (
    <div className="workouts-column">
        <div className="workout">
            <AutoSaveForm
                initialValues={workout}
                update={updateWorkout}
                render={({values}) => (
                    <Fragment>
                        <Label htmlFor={`workout${values.id}`}>Completed</Label>
                        <Checkbox
                            id={`workout${values.id}`}
                            name="isDone"
                        />
                        <div className={classNames(
                            'workout-name',
                            values.isDone && 'workout-name--is-done'
                        )}>
                            <Input
                                name="name"
                                placeholder="Name..."
                                background="dark"
                            />
                        </div>
                    </Fragment>
                )}
            />

            {children}

            <div className="workout-button-remove">
                <ButtonIcon
                    remove
                    danger
                    onClick={() => removeWorkout(workout.id)}
                />
            </div>
        </div>
    </div>
)

export default Workout
