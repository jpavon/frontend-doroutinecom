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
    }

    render() {
        const {
            to,
            href,
            className,
            children,
            ...rest
        } = this.props;

        const Element = to ? Link : href ? 'a' : 'button'

        return (
            <Element className={classNames('button', className)} href={href} to={to} {...rest}>
                {children}
            </Element>
        )
    }
}

export default Button
