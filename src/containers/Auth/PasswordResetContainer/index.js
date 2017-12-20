import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { passwordReset } from 'data/user/actions'

import PasswordReset from 'components/Auth/PasswordReset'

class PasswordResetContainer extends Component {

    static propTypes = {
        token: PropTypes.string.isRequired,

        passwordReset: PropTypes.func.isRequired,
    }

    state = {
        errors: {},
        success: false
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.passwordReset({
            token: this.props.token,
            email: this.email.value,
            password: this.password.value,
            passwordConfirmation: this.passwordConfirmation.value
        }).then((resp) => {
            if (resp.error) {
                this.password.value = ''
                this.passwordConfirmation.value = ''
                this.setState({ errors: resp.error.errors })
            } else {
                this.setState({
                    errors: {},
                    success: 'Your password has been reset, login again.'
                })
            }
        })
    }

    setRef = (ref, name) => {
        this[name] = ref
    }

    render() {
        return (
            <PasswordReset
                handleSubmit={this.handleSubmit}
                errors={this.state.errors}
                success={this.state.success}
                setRef={this.setRef}
            />
        )
    }
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = {
    passwordReset
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordResetContainer)
