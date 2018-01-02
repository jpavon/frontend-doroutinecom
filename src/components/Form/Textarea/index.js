import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import TextareaAutosize from 'react-textarea-autosize'

import './style.css'

const Textarea = ({name, className, ...rest}) => (
    <TextareaAutosize
        name={name}
        className={classNames(
            'textarea',
            className
        )}
        {...rest}
    />
)

Textarea.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
}

export default Textarea
