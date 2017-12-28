import React, { Fragment } from 'react'

import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import InputWrapper from 'components/Form/InputWrapper'
import ButtonIcon from 'components/ButtonIcon'

const Set = ({set, i, updateSet, removeSet}) => (
    <div className="set">
        <div className="set-number">
            Set {i + 1} - <span className="set-rmPercentage">RM% {set.rmPercentage}</span>
        </div>
        <AutoSaveForm
            initialValues={set}
            update={updateSet}
            render={({values}) => (
                <Fragment>
                    <div className="set-row">
                        <div className="set-col">
                            <div className="set-weight">
                                <InputWrapper item="KG">
                                    <Input
                                        name="weight"
                                    />
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="set-col">
                            <div className="set-reps">
                                <InputWrapper item={values.reps > 1 ? 'reps' : 'rep'}>
                                    <Input
                                        name="reps"
                                    />
                                </InputWrapper>
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
            onClick={() => removeSet(set.id)}
        />
    </div>
)

export default Set
