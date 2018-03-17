import * as React from 'react'

import { IOption } from 'components/Form/Select'

import Label from 'components/Form/Label'
import Input from 'components/AutoSaveForm/Input'
import Select from 'components/AutoSaveForm/Select'
import Checkbox from 'components/AutoSaveForm/Checkbox'
import Textarea from 'components/AutoSaveForm/Textarea'
import Datetime from 'components/AutoSaveForm/Datetime'
import UncontrolledInput from 'components/Form/Input'

import './style.css'

interface IFieldProps {
    id: string
    label: string
    component?: string
    uncontrolled?: boolean

    // rest
    type?: string
    name?: string
    placeholder?: string
    inputRef?: (ref: HTMLInputElement) => void
    options?: IOption[]
}

const Field: React.SFC<IFieldProps> = ({id, label, component, uncontrolled = false, ...rest}) => {

    // tslint:disable-next-line
    let Component: React.ComponentClass<any> | React.SFC<any> = Input

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
            <Label htmlFor={'' + id}>{label}</Label>
            <Component
                id={id}
                {...rest}
            />
        </div>
    )
}

export default Field
