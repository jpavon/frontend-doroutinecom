import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { registerUser } from 'data/user/actions'

class LoginContainer extends Component {

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
                localStorage.setItem('token', resp.payload.apiToken)
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
                <div>
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input id="name" type="text" ref={(ref) => this.name = ref} />
                </div>

                <div>
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input id="email" type="text" ref={(ref) => this.email = ref} />
                </div>

                <div>
                    <label htmlFor="password">
                        Password:
                    </label>
                    <input id="password" type="password" ref={(ref) => this.password = ref} />
                </div>

                <div>
                    <label htmlFor="passwordConfirmation">
                        Password confirmation:
                    </label>
                    <input id="passwordConfirmation" type="password" ref={(ref) => this.passwordConfirmation = ref} />
                </div>

                <input type="submit" value="Submit" />
            </form>
        )
    }
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = {
    registerUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer))
