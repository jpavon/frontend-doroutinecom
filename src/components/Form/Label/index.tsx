import * as React from 'react'

import { Label as StyledLabel } from './style'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    htmlFor: string
    title?: string
}

const Label: React.SFC<LabelProps> = (props) => {
    const { children, htmlFor, title } = props

    return (
        <StyledLabel htmlFor={htmlFor} title={title} {...props}>
            {children}
        </StyledLabel>
    )
}

export default Label
