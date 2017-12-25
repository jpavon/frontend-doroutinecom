import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.css'

const InputWrapper = ({children, className, item, ...rest}) => (
    <div
        className={classNames(
            'input-wrapper',
            className
        )}
        {...rest}
    >
        {children}
        <div className="input-item">
            {item}
        </div>
    </div>
)

InputWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    item: PropTypes.any
}

export default InputWrapper
