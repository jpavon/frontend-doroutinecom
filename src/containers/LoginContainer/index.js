import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { loginUser } from 'data/user/actions'

import Login from 'components/Login'

class LoginContainer extends Component {

    static propTypes = {
        loginUser: PropTypes.func.isRequired
    }

    state = {
        errors: {}
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.loginUser({
            email: this.email.value,
            password: this.password.value
        }).then((payload) => {
            if (payload.error) {
                this.password.value = ''
                this.setState({ errors: payload.error.errors })
            } else {
                this.props.history.push(this.props.location.state.from || '/')
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
    loginUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer))
