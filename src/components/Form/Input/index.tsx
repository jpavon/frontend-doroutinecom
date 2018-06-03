import * as React from 'react'
import * as classNames from 'classnames'

import './style.scss'

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    align?: 'right' | 'center'
    inputRef?: React.RefObject<HTMLInputElement>
}

const Input: React.SFC<IInputProps> = (props) => {

    const {
        name,
        type,
        className,
        inputRef,
        align,
        ...rest
    } = props

    return (
        <input
            name={name}
            type={type || 'text'}
            ref={inputRef}
            className={classNames(
                'input',
                align === 'right' && 'input--right',
                align === 'center' && 'input--center',
                className
            )}
            {...rest}
        />
    )
}

export default Input
