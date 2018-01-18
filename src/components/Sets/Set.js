import React, { Fragment } from 'react'
import classNames from 'classnames'

import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import InputWithItem from 'components/Form/InputWithItem'
import Button from 'components/Button'
import Checkbox from 'components/AutoSaveForm/Checkbox'
import Label from 'components/Form/Label'

const Set = ({i, set, routine, update, remove, isDeleting}) => (
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
                    <div className="set-title">
                        <span>Set {i + 1} </span>
                        <span title="Training Max" className="set-rmPercentage">
                            - TM% {set.tmPercentage}
                        </span>
                    </div>
                    <Label htmlFor={`set-completed${values.id}`} className="set-checkbox">
                        <Checkbox
                            id={`set-completed${values.id}`}
                            name="isCompleted"
                        />
                    </Label>
                    <div className="set-row">
                        <div className="set-col">
                            <div className="set-reps">
                                <InputWithItem
                                    item={!isNaN(values.reps) && (values.reps > 1 ? 'reps' : 'rep')}
                                >
                                    <Input
                                        name="reps"
                                    />
                                </InputWithItem>
                            </div>
                        </div>
                        <div className="set-col">
                            <div className="set-weight">
                                <InputWithItem
                                    item={routine.weightMeasure}
                                >
                                    <Input
                                        type="number"
                                        name="weight"
                                    />
                                </InputWithItem>
                            </div>
                        </div>
                    </div>
                    <div className="set-button-remove">
                        <Button
                            minus
                            danger
                            transparent
                            onClick={() => remove(set.id)}
                            disabled={isDeleting}
                        >
                            Set
                        </Button>
                    </div>
                </div>
            )}
        />
    </Fragment>
)

export default Set
