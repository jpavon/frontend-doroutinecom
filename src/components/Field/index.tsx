import * as React from 'react'

import Label from 'components/Form/Label'

import './style.scss'

interface IFieldProps {
    id: string
    label: string
    children: React.ReactElement<{}>
}

const Field: React.SFC<IFieldProps> = (props) => (
    <div className="field">
        <Label htmlFor={props.id}>{props.label}</Label>
        {props.children}
    </div>
)

export default Field
