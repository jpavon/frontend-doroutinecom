import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Label from 'components/Form/Label'
import Input from 'components/AutoSaveForm/Input'
import Select from 'components/AutoSaveForm/Select'
import Checkbox from 'components/AutoSaveForm/Checkbox'
import Textarea from 'components/AutoSaveForm/Textarea'

import './style.css'

const FieldGroup = ({id, label, component, ...rest}) => {

    let Component = Input

    if (component === 'select') {
        Component = Select
    }

    if (component === 'checkbox') {
        Component = Checkbox
    }

    if (component === 'textarea') {
        Component = Textarea
    }

    return (
        <div className="field-group">
            <Label htmlFor={id}>{label}</Label>
            <Component
                id={id}
                {...rest}
            />
        </div>
    )
}

export default FieldGroup
