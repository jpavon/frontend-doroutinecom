import React, { Fragment } from 'react'

import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import InputWithItem from 'components/Form/InputWithItem'
import ButtonIcon from 'components/ButtonIcon'

const Set = ({i, set, weightMeasure, update, remove}) => (
    <div className="set">
        <div className="set-number">
            Set {i + 1}
            <div className="set-rmPercentage">
                <span title="Rep Max">RM</span> {set.rmPercentage}%
                / <span title="Training Max">TM</span> {set.tmPercentage}%
            </div>
        </div>
        <AutoSaveForm
            initialValues={set}
            update={update}
            render={({values}) => (
                <Fragment>
                    <div className="set-row">
                        <div className="set-col">
                            <div className="set-weight">
                                <InputWithItem item={weightMeasure}>
                                    <Input
                                        name="weight"
                                    />
                                </InputWithItem>
                            </div>
                        </div>
                        <div className="set-col">
                            <div className="set-reps">
                                <InputWithItem item={values.reps > 1 ? 'reps' : 'rep'}>
                                    <Input
                                        name="reps"
                                    />
                                </InputWithItem>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        />
        <ButtonIcon
            remove
            danger
            className="set-button-remove"
            onClick={() => remove(set.id)}
        />
    </div>
)

export default Set
