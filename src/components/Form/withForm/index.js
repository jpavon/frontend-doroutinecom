import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const FORM_CONTEXT = '__FORM_CONTEXT__'

export default function withForm(WrappedComponent) {
    return class WithForm extends Component {

        static propTypes = {
            data: PropTypes.object.isRequired,
            update: PropTypes.func.isRequired
        }

        static childContextTypes = {
            [FORM_CONTEXT]: PropTypes.object.isRequired
        }

        getChildContext = () => ({
            [FORM_CONTEXT] : {
                data: this.state.data,
                errors: this.state.errors,
                onChange: this.handleChange
            }
        })

        state = {
            data: this.props.data,
            errors: {}
        }

        handleChange = (event, name) => {
            const value = event.target.value

            this.setState((prevState) => ({
                data: {
                    ...prevState.data,
                    [name]: value
                }
            }), () => {
                this.props.update(this.props.data.id, { [name]: value })
                    .then((payload) => {
                        if (payload.error) {
                            this.setState({
                                errors: payload.error.errors
                            })
                        } else {
                            this.setState({
                                errors: {}
                            })
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }
}
