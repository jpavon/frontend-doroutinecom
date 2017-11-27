import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ErrorMessage from 'components/Form/ErrorMessage'

import './style.css'

class Select extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired,
        options: PropTypes.array.isRequired,
        defaultOptionMessage: PropTypes.string.isRequired,
        noOptionsMessage: PropTypes.string,
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
            options,
            defaultOptionMessage,
            noOptionsMessage,
            ...rest
        } = this.props

        return [
            <select
                key={1}
                value={this.state.value || ''}
                name={name}
                onChange={this.handleChange}
                className="select"
                {...rest}
            >
                {!value && <option>{defaultOptionMessage}</option>}
                {options.length > 0 &&
                    options.map((option, i) => (
                        <option key={i} value={option.id}>{option.name}</option>
                    ))
                }
            </select>,
            <ErrorMessage
                key={2}
                error={options < 1 ? noOptionsMessage : ''}
            />,
            <ErrorMessage
                key={3}
                error={Object.keys(this.context.errors).length !== 0 ? this.context.errors[this.props.name][0] : ''}
            />
        ]
    }
}

export default Select
