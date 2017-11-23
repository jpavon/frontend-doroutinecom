import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.css'

class ErrorMessage extends Component {

    static propTypes = {
        error: PropTypes.string,
    }

    render() {
        return this.props.error && (
            <div className="error-message">{this.props.error}</div>
        )
    }
}

export default ErrorMessage
