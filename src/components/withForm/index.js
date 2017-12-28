import React, { Component } from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash/isEqual'

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
                ...this.state,
                onChange: this.handleChange,
            }
        })

        constructor(props) {
            super(props)

            this.state = {
                data: props.data,
                errors: {},
                updatedKey: null,
                isUpdating: false
            }
        }

        componentWillReceiveProps(nextProps) {
            if (
                this.state.isUpdating === false &&
                !isEqual(nextProps.data, this.props.data)
            ) {
                this.setState({
                    data: nextProps.data
                })
            }
        }

        handleChange = (event, name) => {
            const target = event.target
            const value = target.type === 'checkbox' ? target.checked : target.value

            this.setState((prevState) => ({
                isUpdating: true,
                data: {
                    ...prevState.data,
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
                                updatedKey: name
                            }, () => {
                                this.setState({updatedKey: null})
                            })
                        }

                        this.setState({isUpdating: false})
                    })
            })
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
