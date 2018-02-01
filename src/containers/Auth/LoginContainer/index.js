import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loginUser, authUser } from 'data/user/actions'
import { showAlert } from 'data/ui/actions'

import Login from 'components/Auth/Login'
import TopNav from 'components/TopNav'

class LoginContainer extends Component {

    static propTypes = {
        loginUser: PropTypes.func.isRequired,
        authUser: PropTypes.func.isRequired,
        showAlert: PropTypes.func.isRequired
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.loginUser({
            email: this.email.value,
            password: this.password.value
        }).then((resp) => {
            if (resp.error) {
                this.password.value = ''
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
                <TopNav
                    title="Login"
                />
                <Login
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
    loginUser,
    authUser,
    showAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
