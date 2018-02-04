import React, { Fragment } from 'react'
import classNames from 'classnames'

import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import Button from 'components/Button'
import Checkbox from 'components/AutoSaveForm/Checkbox'
import Label from 'components/Form/Label'

const Set = ({i, set, routine, update, remove, isDeleting, isWorkout, showDelete}) => (
    <Fragment>
        <AutoSaveForm
            initialValues={set}
            update={update}
            render={({values}) => (
                <div
                    className={classNames(
                        'set-inner',
                        values.isCompleted && 'set-inner--is-completed'
                    )}
                >
                    <div className="set-inner-item">
                        <Label>#{i + 1}</Label>
                    </div>
                    <div className="set-inner-item">
                        <Input
                            name="reps"
                            placeholder="Set reps"
                        />
                    </div>
                    <div className="set-inner-item">
                        <Input
                            type="number"
                            name="weight"
                            placeholder="Set weight"
                        />
                    </div>
                    <div className="set-inner-item set-action">
                        {isWorkout && !showDelete &&
                            <Label htmlFor={`set-checkbox${values.id}`}>
                                <Checkbox
                                    id={`set-checkbox${values.id}`}
                                    name="isCompleted"
                                />
                            </Label>
                        }
                        {showDelete &&
                            <Button
                                remove
                                danger
                                onClick={() => remove(set.id)}
                                disabled={isDeleting}
                            />
                        }
                    </div>
                </div>
            )}
        />
    </Fragment>
)

export default Set
