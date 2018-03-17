import * as React from 'react'

import { IFormatedLift, ILiftActionArgs } from 'data/lifts/types'

import AutoSaveForm, { IAutoSaveFormState } from 'components/AutoSaveForm'
import Field from 'components/Field'

import './style.css'

interface IProps {
    lift: IFormatedLift
    update: ILiftActionArgs['put']
}

const Lift: React.SFC<IProps> = ({lift, update}) => (
    <div className="lift">
        <AutoSaveForm
            initialValues={lift}
            update={update}
            render={({values}: IAutoSaveFormState) => (
                <div className="lift-form">
                    <Field
                        label="Name"
                        id="name"
                        name="name"
                        placeholder="Type the lift name"
                    />
                </div>
            )}
        />
    </div>
)

export default Lift
