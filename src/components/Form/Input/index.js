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

Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    align: PropTypes.oneOf(['right', 'center']),
    size: PropTypes.oneOf(['large']),
}

export default Input
