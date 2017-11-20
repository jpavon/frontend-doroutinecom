import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import classNames from 'classnames'

import './style.css'

class Input extends Component {

    static propTypes = {
        type: PropTypes.string,
        name: PropTypes.string.isRequired,
        errors: PropTypes.array,
        alignRight: PropTypes.bool,
        item: PropTypes.shape({
            name: PropTypes.string.isRequired,
            position: PropTypes.oneOf(['left', 'right']).isRequired
        })
    }

    render() {
        const {
            type,
            name,
            item,
            errors,
            ...rest
        } = this.props;

        const Item = (item && <div className="form-input-item">{item.name}</div>)

        return (
            <div className="form-input-container">
                <div className="form-input">
                    {item && item.position === 'left' && Item}
                    <Field
                        type={type || 'text'}
                        name={name}
                        className={classNames(
                            this.props.alignRight && 'input-right'
                        )}
                        {...rest}
                    />
                    {item && item.position === 'right' && Item}
                </div>
                {errors && <div className="form-errors">{errors.map((error, i) => (
                    <div key={i} className="form-error">{error}</div>
                ))}</div>}
            </div>
        )
    }
}

export default Input
