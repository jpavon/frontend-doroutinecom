import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { FORM_CONTEXT } from 'components/Form/withForm'
import ErrorMessage from 'components/ErrorMessage'
import FlashMessage from 'components/FlashMessage'

import './style.css'

const Input = (props, context) => {

    const {
        name,
        align,
        background,
        ...rest
    } = props

    const { data, errors, onChange, updated } = context[FORM_CONTEXT]

    return (
        <Fragment>
            <FlashMessage
                visible={updated === name}
            >
                Updated.
            </FlashMessage>
            <input
                value={data[name] || ''}
                name={name}
                onChange={(event) => onChange(event, name)}
                className={classNames(
                    'input',
                    align === 'right' && 'input-right',
                    align === 'center' && 'input-center',
                    background === 'dark' && 'input-background-dark'
                )}
                {...rest}
            />
            <ErrorMessage
                error={errors[name]}
            />
        </Fragment>
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    align: PropTypes.oneOf(['right', 'center']),
    background: PropTypes.oneOf(['dark']),
}

Input.contextTypes = {
    [FORM_CONTEXT]: PropTypes.object.isRequired
}

export default Input
