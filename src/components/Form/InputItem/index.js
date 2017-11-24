import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.css'

class InputItem extends Component {

    static propTypes = {
        item: PropTypes.any.isRequired,
    }

    render() {
        const { item, ...rest } = this.props
        return (
            <div
                className={classNames(
                    'input-item',
                    this.props.className
                )}
                {...rest}
            >
                {item}
            </div>
        )
    }
}

export default InputItem
