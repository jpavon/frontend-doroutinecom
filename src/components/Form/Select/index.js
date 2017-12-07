import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { FORM_CONTEXT } from 'components/Form/withForm'
import ErrorMessage from 'components/ErrorMessage'

import './style.css'

const Select = (props, context) => {

    const {
        name,
        options,
        defaultOptionMessage,
        noOptionsMessage,
        ...rest
    } = props

    const { data, errors, onChange } = context[FORM_CONTEXT]

    const value = data[name]

    return (
        <Fragment>
            <select
                value={value || ''}
                name={name}
                onChange={(event) => onChange(event, name)}
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
                error={errors[name]}
            />
        </Fragment>
    )
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    defaultOptionMessage: PropTypes.string,
    noOptionsMessage: PropTypes.string
}

Select.contextTypes = {
    [FORM_CONTEXT]: PropTypes.object.isRequired
}

export default Select
