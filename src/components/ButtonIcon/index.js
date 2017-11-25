import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.css'

const plusIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="#fff"><path fillRule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>)
const removeIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="#fff"><path fillRule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>)

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
            </button>
        )
    }
}

export default ButtonIcon
