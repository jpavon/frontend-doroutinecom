import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { FORM_CONTEXT } from 'components/Form/withForm'
import ErrorMessage from 'components/ErrorMessage'

import './style.css'

const Checkbox = (props, context) => {

    const {
        name,
        ...rest
    } = props

    const { data, errors, onChange } = context[FORM_CONTEXT]

    return (
        <Fragment>
            <input
                type="checkbox"
                checked={data[name]}
                onChange={(event) => onChange(event, name)}
                className={classNames(
                    'checkbox'
                )}
                {...rest}
            />
            <ErrorMessage
                error={errors[name]}
            />
        </Fragment>
    )
}

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
}

Checkbox.contextTypes = {
    [FORM_CONTEXT]: PropTypes.object.isRequired
}

export default Checkbox
