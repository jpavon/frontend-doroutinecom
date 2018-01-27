import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Label from 'components/Form/Label'
import Input from 'components/AutoSaveForm/Input'

import './style.css'

const FieldGroup = ({id, label, ...rest}) => (
    <div className="field-group">
        <Label htmlFor={id}>{label}</Label>
        <Input
            id={id}
            {...rest}
        />
    </div>
)

export default FieldGroup
