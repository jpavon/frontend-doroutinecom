import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'

import './style.css'

class Select extends Component {

    static propTypes = {
        options: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired,
        defaultOptionMessage: PropTypes.string.isRequired,
        noOptionsMessage: PropTypes.string,
        errors: PropTypes.array,
    }

    render() {
        const {
            options,
            name,
            value,
            defaultOptionMessage,
            noOptionsMessage,
            errors,
            ...rest
        } = this.props;


        return (
            <div className="form-select">
                {options &&
                    <Field component="select" name={name} {...rest}>
                        {!value && <option>{defaultOptionMessage}</option>}
                        {options.map((option, i) => (
                            <option key={i} value={option.id}>{option.name}</option>
                        ))}
                    </Field>
                }
                {options < 1 && noOptionsMessage && <div className="message">{noOptionsMessage}</div>}
                {errors && <div className="form-errors">{errors.map((error, i) => (
                    <div key={i} className="form-error">{error}</div>
                ))}</div>}
            </div>
        )
    }
}

export default Select
