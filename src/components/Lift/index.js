import React from 'react'

import AutoSaveForm from 'components/AutoSaveForm'
import FieldGroup from 'components/AutoSaveForm/FieldGroup'

const Lift = ({lift, remove, update, isDeleting}) => (
    <div className="lift">
        <AutoSaveForm
            initialValues={lift}
            update={update}
            render={({values}) => (
                <div className="lift-form">
                    <FieldGroup
                        label="Name"
                        id="name"
                        name="name"
                        placeholder="Type the lift name"
                    />
                    <FieldGroup
                        label="Rep Max"
                        id="rm"
                        name="rm"
                        placeholder="Type the rep max for the lift"
                    />
                </div>
            )}
        />
    </div>
)

export default Lift
