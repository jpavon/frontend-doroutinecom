import React, { Fragment } from 'react'

import withForm from 'components/withForm'
import Input from 'components/withForm/Input'
import InputWrapper from 'components/Form/InputWrapper'

const setForm = ({hocState, data}) => (
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
                    <InputWrapper item={hocState.data.reps > 1 ? 'reps' : 'rep'}>
                        <Input
                            name="reps"
                        />
                    </InputWrapper>
                </div>
            </div>
        </div>
    </Fragment>
)

export default withForm(setForm)
