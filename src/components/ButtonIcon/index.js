import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import removeIcon from 'media/minus.svg'
import plusIcon from 'media/plus.svg'

import './style.css'

class ButtonIcon extends Component {

    static propTypes = {
        href: PropTypes.string,
        to: PropTypes.string,
        className: PropTypes.string,
        children: PropTypes.node,

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

            plus,
            remove,

            ...rest
        } = this.props;

        return (
            <button
                className={classNames(
                    'button-icon',
                    danger && 'button--danger',
                    className
                )}
                href={href}
                to={to}
                {...rest}
            >
                {plus && <img src={plusIcon} alt="Add"/>}
                {remove && <img src={removeIcon} alt="Remove" />}
                {children && <div className="button-icon-text">{children}</div>}
            </button>
        )
    }
}

export default ButtonIcon
