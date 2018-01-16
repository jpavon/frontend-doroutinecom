import React, { Fragment } from 'react'

import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import InputWithItem from 'components/Form/InputWithItem'
import Button from 'components/Button'

const Set = ({i, set, routine, update, remove, isDeleting}) => (
    <Fragment>
        <div className="set-number">
            <span>Set {i + 1} - </span>
            <span title="Training Max" className="set-rmPercentage">
                TM% {set.tmPercentage}
            </span>
        </div>
        <AutoSaveForm
            initialValues={set}
            update={update}
            render={({values}) => (
                <Fragment>
                    <div className="set-row">
                        <div className="set-col">
                            <div className="set-reps">
                                <InputWithItem
                                    item={values.reps > 1 ? 'reps' : 'rep'}
                                >
                                    <Input
                                        type="number"
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
                </Fragment>
            )}
        />
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

    </Fragment>
)

export default Set
