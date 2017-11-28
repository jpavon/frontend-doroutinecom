import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { loginUser } from 'data/user/actions'

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
                this.props.history.push('/')
            }
        })
    }

    render() {
        return (
            <form method="post" onSubmit={this.handleSubmit}>
                {Object.keys(this.state.errors).length > 0 &&
                    <div>
                        {Object.keys(this.state.errors).map((error, i) => (
                            <div key={i}>{this.state.errors[error]}</div>
                        ))}
                    </div>
                }
                <label>
                    Email:
                    <input id="email" type="text" ref={(ref) => this.email = ref} />
                </label>
                <label>
                    Password:
                    <input id="password" type="password" ref={(ref) => this.password = ref} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = {
    loginUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer))
