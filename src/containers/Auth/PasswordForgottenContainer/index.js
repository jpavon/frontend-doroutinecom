import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { passwordForgotten } from 'data/user/actions'
import { showAlert } from 'data/ui/actions'

import PasswordForgotten from 'components/Auth/PasswordForgotten'
import TopNav from 'components/TopNav'

class PasswordForgottenContainer extends Component {

    static propTypes = {
        passwordForgotten: PropTypes.func.isRequired,
        showAlert: PropTypes.func.isRequired,
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.passwordForgotten({
            email: this.email.value
        }).then((resp) => {
            if (resp.error) {
                this.props.showAlert('error', resp.error.errors)
            } else {
                this.props.showAlert('success', 'A password reset email has been sent.')
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
                    title="Password Forgotten"
                />
                <PasswordForgotten
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
    passwordForgotten,
    showAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordForgottenContainer)
