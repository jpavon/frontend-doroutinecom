import React, { Fragment } from 'react'

import AutoSaveForm from 'components/AutoSaveForm'
import Button from 'components/Button'
import FieldGroup from 'components/AutoSaveForm/FieldGroup'

const Exercise = ({children, lift}) => (
    <div className="exercise">
        <div className="exercise-lift">
            {lift && lift.name}
        </div>

        {children}
    </div>
)

export default Exercise
