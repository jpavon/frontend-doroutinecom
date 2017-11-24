import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.css'

class InputWrapper extends Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
    }

    render() {
        const { children, ...rest } = this.props
        return (
            <div
                className={classNames(
                    'input-wrapper',
                    this.props.className
                )}
                {...rest}
            >
                {children}
            </div>
        )
    }
}

export default InputWrapper
