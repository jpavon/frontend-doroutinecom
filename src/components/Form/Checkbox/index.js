import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import tickIcon from 'media/tick.svg'

import './style.css'

const Checkbox = (props) => {

    const {
        name,
        className,
        ...rest
    } = props

    return (
        <Fragment>
            <span
                className={classNames(
                    'checkbox-tick',
                    props.checked && 'checkbox-tick--checked'
                )}
            >
                {props.checked && <img src={tickIcon} alt="Checkbox" />}
            </span>
            <input
                name={name}
                type="checkbox"
                className={classNames(
                    'checkbox',
                    className
                )}
                {...rest}
            />
        </Fragment>
    )
}

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    className: PropTypes.string
}

export default Checkbox
