import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { registerUser, authUser } from 'data/user/actions'
import { showAlert } from 'data/ui/actions'

import Register from 'components/Auth/Register'

class RegisterContainer extends Component {

    static propTypes = {
        registerUser: PropTypes.func.isRequired,
        authUser: PropTypes.func.isRequired,
        showAlert: PropTypes.func.isRequired
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.registerUser({
            name: this.name.value,
            email: this.email.value,
            password: this.password.value,
            passwordConfirmation: this.passwordConfirmation.value
        }).then((resp) => {
            if (resp.error) {
                this.password.value = ''
                this.passwordConfirmation.value = ''
                this.props.showAlert('error', resp.error.errors)
            } else {
                this.props.authUser(resp.payload.token)
            }
        })
    }

    setRef = (ref, name) => {
        this[name] = ref
    }

    render() {
        return (
            <Fragment>
                <Register
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
    registerUser,
    authUser,
    showAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
