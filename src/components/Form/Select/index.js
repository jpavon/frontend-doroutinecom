import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import ErrorMessage from 'components/ErrorMessage'

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

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     const differentData = this.context.data[this.props.name] !== nextContext.data[this.props.name]
    //     const differentErrors = this.context.errors[this.props.name] !== nextContext.errors[this.props.name]
    //     return differentData || differentErrors
    // }

    render() {
        const {
            name,
            options,
            defaultOptionMessage,
            noOptionsMessage,
            ...rest
        } = this.props

        const value = this.context.data[this.props.name]

        return (
            <Fragment>
                <select
                    value={value || ''}
                    onChange={(event) => this.context.onChange(event, this.props.name)}
                    className="select"
                    {...rest}
                >
                    {!value && <option>{defaultOptionMessage}</option>}
                    {options.length > 0 &&
                        options.map((option, i) => (
                            <option key={i} value={option.id}>{option.name}</option>
                        ))
                    }
                </select>
                <ErrorMessage
                    error={options < 1 && noOptionsMessage}
                />
                <ErrorMessage
                    error={this.context.errors[name]}
                />
            </Fragment>
        )
    }
}

export default Select
