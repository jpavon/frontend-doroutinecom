import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.css'

class InputWrapper extends Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
    }

    render() {
        return (
            <div className="input-wrapper">
                {this.props.children}
            </div>
        )
    }
}

export default InputWrapper
