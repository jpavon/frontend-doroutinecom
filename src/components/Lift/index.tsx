import * as React from 'react'

import { ILift } from 'data/lifts/types'
import { putLift } from 'data/lifts/actions'

import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import Field from 'components/Field'

import './style.scss'

interface IProps {
    lift: ILift
    update: typeof putLift
}

const Lift: React.SFC<IProps> = (props) => (
    <div className="lift">
        <AutoSaveForm
            initialValues={props.lift}
            update={props.update}
            render={() => (
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
