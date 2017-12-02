import React, { Fragment } from 'react'

import withForm from 'components/Form/withForm'
import Input from 'components/Form/Input'

const round = (x) => (Math.ceil(x/2.5) * 2.5)

const setForm = ({data, lift}) => (
    <Fragment>
        <div className="set-row">
            <div className="set-col">
                <div className="set-rmPercentage">
                    <Input
                        name="rmPercentage"
                        alignRight
                    />
                    <div className="set-label">
                        RM%
                    </div>
                </div>
            </div>
            <div className="set-col">
                <div className="set-reps">
                    <Input
                        name="reps"
                        alignRight
                    />
                    <div className="set-label">
                        Reps
                    </div>
                </div>
            </div>
            <div className="set-col">
                <div className="set-weight">
                    {round(data.rmPercentage * lift.rm / 100)}
                    <div className="set-mass">KG</div>
                </div>
            </div>
        </div>
    </Fragment>
)

export default withForm(setForm)
