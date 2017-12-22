import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.css'

const Input = (props) => {

    const {
        name,
        type,
        className,
        inputRef,
        align,
        background,
        ...rest
    } = props

    return (
        <input
            name={name}
            type={type || 'text'}
            ref={inputRef}
            className={classNames(
                'input',
                align === 'right' && 'input-right',
                align === 'center' && 'input-center',
                background === 'dark' && 'input-background-dark',
                className
            )}
            {...rest}
        />
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    align: PropTypes.oneOf(['right', 'center']),
    background: PropTypes.oneOf(['dark']),
}

export default Input
