import * as React from 'react'

import Label from 'components/Form/Label'

import './style.scss'

interface IFieldProps {
    id: string
    label: string
    children: React.ReactElement<{}>
}

const Field: React.SFC<IFieldProps> = ({id, label, children}) => (
    <div className="field">
        <Label htmlFor={'' + id}>{label}</Label>
        {children}
    </div>
)

export default Field
