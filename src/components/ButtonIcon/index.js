import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.css'

const plusIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 12 16" fill="#fff"><path fillRule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>)
const removeIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 8 16" fill="#fff"><path fillRule="evenodd" d="M0 7v2h8V7z"/></svg>)

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
                {plus && plusIcon}
                {remove && removeIcon}
                {children}
            </button>
        )
    }
}

export default ButtonIcon
