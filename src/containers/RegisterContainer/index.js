import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { registerUser, authUser } from 'data/user/actions'

import Register from 'components/Register'

class RegisterContainer extends Component {

    static propTypes = {
        registerUser: PropTypes.func.isRequired,
        authUser: PropTypes.func.isRequired,
    }

    state = {
        errors: {}
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.registerUser({
            name: this.name.value,
            email: this.email.value,
            password: this.password.value,
            passwordConfirmation: this.password.value
        }).then((resp) => {
            if (resp.error) {
                this.password.value = ''
                this.passwordConfirmation.value = ''
                this.setState({ errors: resp.error.errors })
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
            <Register
                errors={this.state.errors}
                handleSubmit={this.handleSubmit}
                setRef={this.setRef}
            />
        )
    }
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = {
    registerUser,
    authUser
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
