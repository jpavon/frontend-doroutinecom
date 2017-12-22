import React, { Fragment } from 'react'

import withForm from 'components/withForm'
import Input from 'components/withForm/Input'

const setForm = ({data}) => (
    <Fragment>
        <div className="set-row">
            <div className="set-col">
                <div className="set-rmPercentage">
                    <Input
                        name="rmPercentage"
                        align="right"
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
                        align="right"
                    />
                    <div className="set-label">
                        Reps
                    </div>
                </div>
            </div>
            <div className="set-col">
                <div className="set-weight">
                    {data.weight}
                    <div className="set-mass">KG</div>
                </div>
            </div>
        </div>
    </Fragment>
)

export default withForm(setForm)
