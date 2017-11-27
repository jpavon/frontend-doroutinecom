import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import ErrorMessage from 'components/Form/ErrorMessage'

import './style.css'

class Input extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.any,
        alignRight: PropTypes.bool,
        alignCenter: PropTypes.bool
    }

    static contextTypes = {
        errors: PropTypes.object.isRequired,
        update: PropTypes.func.isRequired,
    }

    state = {
        value: this.props.value
    }

    handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        this.setState({value}, () => (this.context.update(name, value)))
    }

    render() {
        const {
            name,
            value,
            alignRight,
            alignCenter,
            ...rest
        } = this.props

        return [
            <input
                key={1}
                value={this.state.value || ''}
                name={name}
                onChange={this.handleChange}
                className={classNames(
                    'input',
                    alignRight && 'input-right',
                    alignCenter && 'input-center'
                )}
                {...rest}
            />,
            <ErrorMessage
                key={2}
                error={Object.keys(this.context.errors).length !== 0 ? this.context.errors[this.props.name][0] : ''}
            />
        ]
    }
}

export default Input
