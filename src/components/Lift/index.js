import React from 'react'

import TopNav from 'components/TopNav'
import AutoSaveForm from 'components/AutoSaveForm'
import Field from 'components/Field'

import './style.css'

const Lift = ({lift, remove, update, isDeleting}) => (
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
