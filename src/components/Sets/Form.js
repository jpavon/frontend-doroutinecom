import React, { Fragment } from 'react'

import withForm from 'components/Form/withForm'
import Input from 'components/Form/Input'
import InputWrapper from 'components/Form/InputWrapper'
import InputItem from 'components/Form/InputItem'

const round = (x) => (Math.ceil(x/2.5) * 2.5)

const setForm = ({data, lift, index}) => (
    <Fragment>
        <div className="set-row">
            <div className="set-col">
                Set {index + 1}
            </div>
            <div className="set-col">
                <InputWrapper>
                    <Input
                        name="rmPercentage"
                        alignRight
                    />
                    <InputItem
                        item="RM%"
                    />
                </InputWrapper>
            </div>


        </div>

        <div className="set-weight">
            <div className="set-weight-value">
                <Input
                    name="reps"
                    alignRight
                />
                REPS @ {round(data.rmPercentage * lift.rm / 100)} <span className="set-mass">KG</span>
            </div>
        </div>
    </Fragment>
)

export default withForm(setForm)
