import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.css'

const Label = (props) => {

    const {
        children,
        className,
        ...rest
    } = props

    return (
        <label
            className={classNames(
                'label',
                className
            )}
            {...rest}
        >
            {children}
        </label>
    )
}

Label.propTypes = {
    children: PropTypes.node.isRequired,
    htmlFor: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Label
