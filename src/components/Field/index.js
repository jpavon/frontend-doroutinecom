import React from 'react'

import Label from 'components/Form/Label'
import Input from 'components/AutoSaveForm/Input'
import Select from 'components/AutoSaveForm/Select'
import Checkbox from 'components/AutoSaveForm/Checkbox'
import Textarea from 'components/AutoSaveForm/Textarea'
import Datetime from 'components/AutoSaveForm/Datetime'
import UncontrolledInput from 'components/Form/Input'

import './style.css'

const Field = ({id, label, component = 'input', uncontrolled = false, ...rest}) => {

    let Component

    if (component === 'input') {
        Component = Input
    }

    if (component === 'select') {
        Component = Select
    }

    if (component === 'checkbox') {
        Component = Checkbox
    }

    if (component === 'textarea') {
        Component = Textarea
    }

    if (component === 'datetime') {
        Component = Datetime
    }

    if (uncontrolled) {
        Component = UncontrolledInput
    }

    return (
        <div className="field">
            <Label htmlFor={id}>{label}</Label>
            <Component
                id={id}
                {...rest}
            />
        </div>
    )
}

export default Field
