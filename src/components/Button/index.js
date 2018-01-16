import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import './style.css'

import minusIcon from 'media/minus.svg'
import plusIcon from 'media/plus.svg'

class Button extends Component {

    static propTypes = {
        href: PropTypes.string,
        to: PropTypes.string,
        className: PropTypes.string,
        children: PropTypes.node,

        small: PropTypes.bool,
        danger: PropTypes.bool,
        transparent: PropTypes.bool,
        plus: PropTypes.bool,
        remove: PropTypes.bool,
    }

    render() {
        const {
            to,
            href,
            className,
            children,
            danger,
            small,
            transparent,
            plus,
            minus,
            ...rest
        } = this.props

        const Element = to ? Link : href ? 'a' : 'button'

        return (
            <Element
                className={classNames(
                    'button',
                    danger && 'button--danger',
                    small && 'button--small',
                    transparent && 'button--transparent',
                    className
                )}
                href={href}
                to={to}
                {...rest}
            >
                {plus && <img src={plusIcon} alt="Add" />}
                {minus && <img src={minusIcon} alt="Remove" />}

                {children}
            </Element>
        )
    }
}

export default Button
