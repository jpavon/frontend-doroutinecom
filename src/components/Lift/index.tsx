import * as React from 'react'

import { IFormatedLift } from 'data/lifts/types'
import { putLift } from 'data/lifts/actions'

import AutoSaveForm, { IAutoSaveFormState } from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import Field from 'components/Field'

import './style.scss'

interface IProps {
    lift: IFormatedLift
    update: typeof putLift
}

const Lift: React.SFC<IProps> = ({lift, update}) => (
    <div className="lift">
        <AutoSaveForm
            initialValues={lift}
            update={update}
            render={({values}: IAutoSaveFormState) => (
                <div className="lift-form">
                    <Field label="Name" id="name">
                        <Input
                            id="name"
                            name="name"
                            placeholder="Type the lift name"
                        />
                    </Field>
                </div>
            )}
        />
    </div>
)

export default Lift
