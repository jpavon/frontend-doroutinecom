import * as React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loginUser, authUser } from 'data/user/actions'
import { showAlert } from 'data/ui/actions'

import Login from 'components/Auth/Login'

interface Response {
    error: { errors: string[] }
    payload: { token: string }
}

interface Props {
    loginUser: (data: {email: string, password: string}) => Promise<Response>
    authUser: (token: string) => void
    showAlert: (type: string, message: string[]) => void
}

class LoginContainer extends React.Component<Props> {

    // static propTypes = {
    //     loginUser: PropTypes.func.isRequired,
    //     authUser: PropTypes.func.isRequired,
    //     showAlert: PropTypes.func.isRequired
    // }
    email: HTMLInputElement
    password: HTMLInputElement

    handleSubmit = (event: React.FormEvent<HTMLInputElement>): void => {
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

    setRef = (ref: HTMLInputElement, name: 'email' | 'password'): void => {
        this[name] = ref
    }

    render() {
        return (
            <>
                <Login
                    handleSubmit={this.handleSubmit}
                    setRef={this.setRef}
                />
            </>
        )
    }
}

// const mapStateToProps = () => ({
// })

const mapDispatchToProps = {
    loginUser,
    authUser,
    showAlert
}

export default connect<Props, {}, {}>(null, mapDispatchToProps)(LoginContainer)
