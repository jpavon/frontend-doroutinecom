import * as React from 'react'

import Label from 'components/Form/Label'
import { Field as StyledField } from './style'

interface Props {
    id: string
    label: string
    children: React.ReactElement<{}>
}

const Field: React.SFC<Props> = (props) => (
    <StyledField>
        <Label htmlFor={props.id}>{props.label}</Label>
        {props.children}
    </StyledField>
)

export default Field
