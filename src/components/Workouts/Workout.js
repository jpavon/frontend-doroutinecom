import React from 'react'
import classNames from 'classnames'

import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import Checkbox from 'components/AutoSaveForm/Checkbox'
import Textarea from 'components/AutoSaveForm/Textarea'
import Label from 'components/Form/Label'
import Button from 'components/Button'

const Workout = ({index, children, workout, update, remove, isDeleting}) => (
    <div className="workout">
        <AutoSaveForm
            initialValues={workout}
            update={update}
            render={({values}) => (
                <div
                    className={classNames(
                        'workout-form',
                        values.isCompleted && 'workout-form--is-completed'
                    )}
                >
                    <Label htmlFor={`workout-completed${values.id}`} className="workout-checkbox">
                        <Checkbox
                            id={`workout-completed${values.id}`}
                            name="isCompleted"
                        />
                        <div className="workout-checkbox-text">Completed</div>
                    </Label>
                    <Label htmlFor={`workout-name${values.id}`}>DAY {index + 1}</Label>
                    <div className="workout-name">
                        <Input
                            id={`workout-name${values.id}`}
                            name="name"
                            placeholder="Name"
                        />
                    </div>
                </div>
            )}
        />

        {children}

        <AutoSaveForm
            initialValues={workout}
            update={update}
            render={({values}) => (
                <div className="workout-notes">
                    <Label htmlFor={`notes${values.id}`}>Notes</Label>
                    <Textarea
                        id={`notes${values.id}`}
                        name="notes"
                    />
                </div>
            )}
        />

        <div className="workout-button-remove">
            <Button
                minus
                transparent
                danger
                onClick={() => remove(workout.id)}
                disabled={isDeleting}
            >
                Workout
            </Button>
        </div>
    </div>
)

export default Workout
