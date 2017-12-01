import React from 'react'

import withForm from 'components/Form/withForm'
import Select from 'components/Form/Select'

const Form = ({lifts}) => (
    <div className="exercise-form">
        <Select
            name="liftId"
            options={lifts || []}
            defaultOptionMessage="Select a lift..."
            noOptionsMessage="No lift created, create one on the top of this page."
        />
    </div>
)

export default withForm(Form)
