import React from 'react'

import AutoSaveForm from 'components/AutoSaveForm'
import Field from 'components/Field'

import './style.css'

const Lift = ({lift, update}) => (
    <div className="lift">
        <AutoSaveForm
            initialValues={lift}
            update={update}
            render={({values}) => (
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
