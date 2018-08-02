import * as React from 'react'

import { Input as StyledInput } from './style'

export interface IInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    inputRef?: React.RefObject<HTMLInputElement>
}

const Input: React.SFC<IInputProps> = (props) => {
    const { name, type, className, inputRef, ...rest } = props

    return (
        <StyledInput
            name={name}
            type={type || 'text'}
            innerRef={inputRef}
            {...rest}
        />
    )
}

export default Input
