import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import Checkbox from 'components/AutoSaveForm/Checkbox'
import Textarea from 'components/AutoSaveForm/Textarea'
import Label from 'components/Form/Label'
import Button from 'components/Button'
import ListItem from 'components/ListItem'

const Workout = ({index, children, workout, update, remove, routineId, isDeleting}) => (
    <ListItem to={`/routines/${routineId}/workouts/${workout.id}`} className="workout">
        {workout.name || 'No workout name set.'}
    </ListItem>
        /*<AutoSaveForm
            initialValues={workout}
            update={update}
            render={({values}) => (
                <div
                    className={classNames(
                        'workout-top',
                        values.isCompleted && 'workout-top--is-completed'
                    )}
                >
                    <div className="workout-top-name">
                        <Label htmlFor={`workout-name${values.id}`}>DAY {index + 1}</Label>
                    </div>
                    <div className="workout-top-input">
                        <Input
                            id={`workout-name${values.id}`}
                            name="name"
                            placeholder="Name"
                        />
                    </div>
                    <Label htmlFor={`workout-completed${values.id}`} className="workout-top-checkbox">
                        <span className="workout-top-checkbox-text">Completed</span>
                        <Checkbox
                            id={`workout-completed${values.id}`}
                            name="isCompleted"
                        />
                    </Label>
                </div>
            )}
        />*/

        /*<AutoSaveForm
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
        />*/

        /*<div className="workout-button-remove">
            <Button
                minus
                transparent
                danger
                onClick={() => remove(workout.id)}
                disabled={isDeleting}
            >
                Workout
            </Button>
        </div>*/
)

export default Workout
