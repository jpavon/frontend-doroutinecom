import React, { Fragment } from 'react'
import classNames from 'classnames'

import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import Button from 'components/Button'
import Checkbox from 'components/AutoSaveForm/Checkbox'
import Label from 'components/Form/Label'

const Set = ({index, set, update, remove, isDeleting, isRemoveButtonsVisible, previousSet}) => (
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
                        <Label>#{index + 1}</Label>
                    </div>
                    <div className="set-inner-item">
                        <Input
                            type="number"
                            name="reps"
                            placeholder={(previousSet && previousSet.reps) ? previousSet.reps : 'Reps'}
                        />
                    </div>
                    <div className="set-inner-item">
                        <Input
                            type="number"
                            name="weight"
                            placeholder={(previousSet && previousSet.weight) ? previousSet.weight : 'Weight'}
                        />
                    </div>
                    <div className="set-inner-item set-action">
                        {!isRemoveButtonsVisible &&
                            <Label htmlFor={`set-checkbox${values.id}`}>
                                <Checkbox
                                    id={`set-checkbox${values.id}`}
                                    name="isCompleted"
                                />
                            </Label>
                        }
                        {isRemoveButtonsVisible &&
                            <Button
                                remove
                                danger
                                onClick={() => remove(set.id)}
                                disabled={isDeleting}
                                className="set-button-remove"
                            />
                        }
                    </div>
                </div>
            )}
        />
    </Fragment>
)

export default Set
