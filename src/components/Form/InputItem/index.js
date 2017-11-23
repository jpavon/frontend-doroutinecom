import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.css'

class InputItem extends Component {

    static propTypes = {
        item: PropTypes.any.isRequired,
    }

    render() {
        return (
            <div className="input-item">
                {this.props.item}
            </div>
        )
    }
}

export default InputItem
