import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import isString from 'lodash/isString'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

import AnimateOnChange from 'react-animate-on-change'

import './style.css'

class Alert extends Component {

    static propTypes = {
        type: PropTypes.string,
        message: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
            PropTypes.object,
            PropTypes.bool
        ]),
        size: PropTypes.string,
        animate: PropTypes.bool
    }

    static defaultProps = {
        animate: true
    }

    render() {
        const { type, message, size } = this.props

        if (!type || !message) return null

        const className = classnames(
            'alert',
            type === 'success' && 'alert--success',
            type === 'error' && 'alert--error',
            type === 'info' && 'alert--info',
            size === 'small' && 'alert--small'
        )

        const Message = () => {
            if (isString(message) || isArray(message) || React.isValidElement(message)) {
                return message
            } else if (isObject(message)) {
                return (
                    Object.keys(message).length > 0 &&
                        Object.keys(message).map((messageKey, i) => (
                            <Fragment key={i}>{message[messageKey]} <br /></Fragment>
                        ))
                )
            } else {
                return null
            }
        }

        return this.props.animate ?
            <AnimateOnChange
                baseClassName={className}
                animationClassName="alert--fade-in"
                animate
            >
                <Message />
            </AnimateOnChange> :
            <div className={className}>
                <Message />
            </div>
    }
}

export default Alert
