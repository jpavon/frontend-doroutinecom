import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import TextareaAutosize from 'react-autosize-textarea'

import './style.css'

const Textarea = ({name, className, ...rest}) => (
    <TextareaAutosize
        rows={2}
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
