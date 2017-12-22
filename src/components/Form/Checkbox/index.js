import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.css'

const Checkbox = (props) => {

    const {
        name,
        className,
        ...rest
    } = props

    return (
        <input
            name={name}
            type="checkbox"
            className={classNames(
                'checkbox',
                className
            )}
            {...rest}
        />
    )
}

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    className: PropTypes.string
}

export default Checkbox
