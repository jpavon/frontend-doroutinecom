import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { registerUser } from 'data/user/actions'
import onUserAuth from 'utils/onUserAuth'

import Register from 'components/Register'

class RegisterContainer extends Component {

    static propTypes = {
        registerUser: PropTypes.func.isRequired
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
                onUserAuth(resp.payload.token, this.props.history, this.props.location)
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
    registerUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterContainer))
