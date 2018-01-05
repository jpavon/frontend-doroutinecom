import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.css'

const Select = (props, context) => {

    const {
        name,
        value,
        options,
        className,
        defaultOptionMessage,
        noOptionsMessage,
        ...rest
    } = props

    return (
        <select
            value={value || ''}
            name={name}
            className={classNames(
                'select',
                !value && 'select--default-option',
                className,
            )}
            {...rest}
        >
            {!value && <option className="select-default-option">{defaultOptionMessage}</option>}
            {options.length > 0 &&
                options.map((option, i) => (
                    <option key={i} value={option.id}>{option.name}</option>
                ))
            }
        </select>
    )
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    options: PropTypes.array.isRequired,
    className: PropTypes.string,
    defaultOptionMessage: PropTypes.string,
    noOptionsMessage: PropTypes.string
}

export default Select
