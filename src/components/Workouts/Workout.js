import React from 'react'
import classNames from 'classnames'

import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import Checkbox from 'components/AutoSaveForm/Checkbox'
import Label from 'components/Form/Label'
import ButtonIcon from 'components/ButtonIcon'

const Workout = ({index, children, workout, update, remove}) => (
    <div className="workouts-column">
        <div className="workout">
            <AutoSaveForm
                initialValues={workout}
                update={update}
                render={({values}) => (
                    <div className={classNames(
                        'workout-form',
                        values.isDone && 'workout-form--is-done'
                    )}>
                        <Label htmlFor={`workout-done${values.id}`} className="workout-checkbox">
                            <Checkbox
                                id={`workout-done${values.id}`}
                                name="isDone"
                            />
                            <div className="workout-checkbox-text">Completed</div>
                        </Label>
                        <Label htmlFor={`workout-name${values.id}`}>DAY {index + 1}</Label>
                        <div className="workout-name">
                            <Input
                                id={`workout-name${values.id}`}
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
                    onClick={() => remove(workout.id)}
                />
            </div>
        </div>
    </div>
)

export default Workout
