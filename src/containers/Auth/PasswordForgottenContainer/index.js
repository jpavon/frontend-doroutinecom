import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { passwordForgotten } from 'data/user/actions'

import PasswordForgotten from 'components/Auth/PasswordForgotten'

class PasswordForgottenContainer extends Component {

    static propTypes = {
        passwordForgotten: PropTypes.func.isRequired,
    }

    state = {
        errors: {},
        success: false
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.passwordForgotten({
            email: this.email.value
        }).then((resp) => {
            if (resp.error) {
                this.setState({ errors: resp.error.errors })
            } else {
                this.setState({
                    errors: {},
                    success: 'A password reset email has been sent.'
                })
            }
        })
    }

    setRef = (ref, name) => {
        this[name] = ref
    }

    render() {
        return (
            <PasswordForgotten
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
    passwordForgotten
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordForgottenContainer)
