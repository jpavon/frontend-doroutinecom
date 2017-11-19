import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import './style.css'

class Button extends Component {

    static propTypes = {
        href: PropTypes.string,
        to: PropTypes.string,
        className: PropTypes.string,
        children: PropTypes.node,

        danger: PropTypes.bool,
    }

    render() {
        const {
            to,
            href,
            className,
            children,
            danger,
            ...rest
        } = this.props;

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
                {...rest}>
                {children}
            </Element>
        )
    }
}

export default Button
