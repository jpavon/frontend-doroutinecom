import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import ErrorMessage from 'components/ErrorMessage'

import './style.css'

class Input extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        alignRight: PropTypes.bool,
        alignCenter: PropTypes.bool,
        darkBg: PropTypes.bool
    }

    static contextTypes = {
        data: PropTypes.object.isRequired,
        errors: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired,
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     const differentData = this.context.data[this.props.name] !== nextContext.data[this.props.name]
    //     const differentErrors = this.context.errors[this.props.name] !== nextContext.errors[this.props.name]
    //     return differentData || differentErrors
    // }

    render() {
        const {
            name,
            alignRight,
            alignCenter,
            darkBg,
            ...rest
        } = this.props

        return (
            <Fragment>
                <input
                    value={this.context.data[name] || ''}
                    onChange={(event) => this.context.onChange(event, name)}
                    className={classNames(
                        'input',
                        alignRight && 'input-right',
                        alignCenter && 'input-center',
                        darkBg && 'input-dark-bg'
                    )}
                    {...rest}
                />
                <ErrorMessage
                    error={this.context.errors[name] || ''}
                />
            </Fragment>
        )
    }
}

export default Input
