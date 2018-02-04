import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import './style.css'

import removeIcon from 'media/x.svg'

class Button extends Component {

    static propTypes = {
        href: PropTypes.string,
        to: PropTypes.string,
        className: PropTypes.string,
        children: PropTypes.node,

        danger: PropTypes.bool,
        remove: PropTypes.bool,
    }

    render() {
        const {
            to,
            href,
            className,
            children,
            danger,
            remove,
            ...rest
        } = this.props

        const Element = to ? Link : href ? 'a' : 'button'

        return (
            <Element
                className={classNames(
                    'button',
                    danger && 'button--danger',
                    className
                )}
                href={href}
                to={to}
                {...rest}
            >
                {remove && <img src={removeIcon} alt="Remove" />}

                {children}
            </Element>
        )
    }
}

export default Button
