import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { passwordReset } from 'data/user/actions'
import { showAlert } from 'data/ui/actions'

import PasswordReset from 'components/Auth/PasswordReset'
import TopNav from 'components/TopNav'

class PasswordResetContainer extends Component {

    static propTypes = {
        token: PropTypes.string.isRequired,

        passwordReset: PropTypes.func.isRequired,
        showAlert: PropTypes.func.isRequired,
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
                this.props.showAlert('error', resp.error.errors)
            } else {
                this.props.showAlert('success', 'Your password has been reset, login again.')
            }
        })
    }

    setRef = (ref, name) => {
        this[name] = ref
    }

    render() {
        return (
            <Fragment>
                <TopNav
                    title="Password Reset"
                />
                <PasswordReset
                    handleSubmit={this.handleSubmit}
                    setRef={this.setRef}
                />
            </Fragment>
        )
    }
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = {
    passwordReset,
    showAlert,
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordResetContainer)
