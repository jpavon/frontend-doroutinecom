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
                onChange: this.handleChange,
                updated: this.state.updated
            }
        })

        state = {
            data: this.props.data,
            errors: {},
            updated: null
        }

        handleChange = (event, name) => {
            const target = event.target
            const value = target.type === 'checkbox' ? target.checked : target.value

            this.setState((prevState) => ({
                data: {
                    ...prevState.data,
                    updated: null,
                    [name]: value
                }
            }), () => {
                this.props.update(this.state.data.id, { [name]: value })
                    .then((resp) => {
                        if (resp.error) {
                            this.setState({
                                errors: resp.error.errors,
                            })
                        } else {
                            this.setState({
                                errors: {},
                                updated: name
                            }, () => {
                                this.clearUpdatedTimer = setTimeout(() => {
                                    this.setState({updated: false})
                                }, 1000)
                            })
                        }
                    })
            })
        }

        componentWillUnmount() {
            clearTimeout(this.clearUpdatedTimer)
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    hocState={this.state}
                />
            )
        }
    }
}
