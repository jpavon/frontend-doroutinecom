import React from 'react'
import classNames from 'classnames'

import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import Checkbox from 'components/AutoSaveForm/Checkbox'
import Label from 'components/Form/Label'
import ButtonIcon from 'components/ButtonIcon'

const Workout = ({index, children, workout, updateWorkout, removeWorkout}) => (
    <div className="workouts-column">
        <div className="workout">
            <AutoSaveForm
                initialValues={workout}
                update={updateWorkout}
                render={({values}) => (
                    <div className={classNames(
                        'workout-form',
                        values.isDone && 'workout-form--is-done'
                    )}>
                        <Checkbox
                            id={`workout${values.id}`}
                            name="isDone"
                        />
                        <Label htmlFor={`workout${values.id}`}>DAY {index + 1}</Label>
                        <div className="workout-name">
                            <Input
                                name="name"
                                placeholder="Name..."
                                background="dark"
                            />
                        </div>
                    </div>
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
