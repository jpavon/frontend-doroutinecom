import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import isString from 'lodash/isString'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

import './style.css'

class ErrorMessage extends Component {

    static propTypes = {
        error: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
            PropTypes.object,
            PropTypes.bool
        ]),
    }

    render() {
        const { error } = this.props

        if (isString(error) || isArray(error)) {
            return <div className="error-message">{error}</div>
        } else if (isObject(error)) {
            return (
                <Fragment>
                    {Object.keys(error).length > 0 &&
                        <div className="error-message">
                            {Object.keys(error).map((errorKey, i) => (
                                <Fragment key={i}>{error[errorKey]} <br /></Fragment>
                            ))}
                        </div>
                    }
                </Fragment>
            )
        } else {
            return null
        }
    }
}

export default ErrorMessage
