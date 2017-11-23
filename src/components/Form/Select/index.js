import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ErrorMessage from 'components/Form/ErrorMessage'

import './style.css'

class Select extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired,
        defaultOptionMessage: PropTypes.string.isRequired,
        noOptionsMessage: PropTypes.string,
    }

    static contextTypes = {
        data: PropTypes.object.isRequired,
        errors: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired,
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const differentData = this.context.data[this.props.name] !== nextContext.data[this.props.name]
        const differentErrors = this.context.errors[this.props.name] !== nextContext.errors[this.props.name]
        return differentData || differentErrors
    }

    render() {
        const {
            name,
            options,
            defaultOptionMessage,
            noOptionsMessage,
            ...rest
        } = this.props

        const value = this.context.data[this.props.name]

        return [
            <select
                key={1}
                value={value || ''}
                onChange={(event) => this.context.onChange(event, this.props.name)}
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
                errors={options < 1 && noOptionsMessage}
            />,
            <ErrorMessage
                key={3}
                errors={this.context.errors[this.props.name][0]}
            />
        ]
    }
}

export default Select
