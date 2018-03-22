import * as React from 'react'
import * as classNames from 'classnames'

import './style.scss'

export interface IInputProps {
    id: string
    name: string
    value?: string
    type?: string
    className?: string
    align?: 'right' | 'center'
    size?: 'large'
    inputRef?: (ref: HTMLInputElement) => void
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
}

const Input: React.SFC<IInputProps> = (props) => {

    const {
        name,
        type,
        className,
        inputRef,
        align,
        size,
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
                size === 'large' && 'input--large',
                className
            )}
            {...rest}
        />
    )
}

export default Input
