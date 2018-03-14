import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Alert from 'components/Form/Alert'
import UncontrolledTextarea from 'components/Form/Textarea'
import Saving from 'components/Saving'

const Textarea = (props, context) => {

    const {
        name,
        ...rest
    } = props

    const { values, errors, onChange, updating } = context.formContext

    return (
        <Fragment>
            <div style={{position: 'relative'}}>
                {updating === name && <Saving />}
                <UncontrolledTextarea
                    name={name}
                    value={values[name] || ''}
                    onChange={onChange}
                    {...rest}
                />
                <Alert
                    message={errors[name]}
                />
            </div>
        </Fragment>
    )
}

Textarea.propTypes = {
    name: PropTypes.string.isRequired,
}

Textarea.contextTypes = {
    formContext: PropTypes.object.isRequired
}

export default Textarea
