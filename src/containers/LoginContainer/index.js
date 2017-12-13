import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loginUser, authUser } from 'data/user/actions'

import Login from 'components/Login'

class LoginContainer extends Component {

    static propTypes = {
        loginUser: PropTypes.func.isRequired,
        authUser: PropTypes.func.isRequired
    }

    state = {
        errors: {}
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.loginUser({
            email: this.email.value,
            password: this.password.value
        }).then((resp) => {
            if (resp.error) {
                this.password.value = ''
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
            <Login
                handleSubmit={this.handleSubmit}
                errors={this.state.errors}
                setRef={this.setRef}
            />
        )
    }
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = {
    loginUser,
    authUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
