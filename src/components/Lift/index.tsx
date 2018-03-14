import * as React from 'react'

import { IFormatedLift, ILiftActionArgs } from 'data/lifts/types'

import AutoSaveForm from 'components/AutoSaveForm'
import Field from 'components/Field'

import './style.css'

interface IProps {
    lift: IFormatedLift
    update: ILiftActionArgs['put']
}

interface IForm {
    values: IFormatedLift
}

const Lift: React.SFC<IProps> = ({lift, update}) => (
    <div className="lift">
        <AutoSaveForm
            initialValues={lift}
            update={update}
            render={({values}: IForm) => (
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
