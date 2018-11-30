import * as React from 'react'

import { Input as StyledInput } from './style'

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    inputRef?: React.RefObject<HTMLInputElement>
}

const Input: React.SFC<InputProps> = (props) => {
    const { name, type, inputRef, ...rest } = props

    return (
        <StyledInput
            name={name}
            type={type || 'text'}
            ref={inputRef}
            {...rest}
        />
    )
}

export default Input
