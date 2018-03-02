import * as React from 'react'
import { connect } from 'react-redux'

import { ILoginData } from 'data/user/types'

import { loginUser } from 'data/user/actions'

import Login from 'components/Auth/Login'

interface IOwnProps {
}

interface IStateProps {
}

interface IDispatchProps {
    loginUser: (data: ILoginData, resolve: () => void, reject: () => void) => void
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class LoginContainer extends React.Component<IProps> {

    email: HTMLInputElement
    password: HTMLInputElement

    handleSubmit = (event: React.FormEvent<HTMLInputElement>): void => {
        event.preventDefault()

        new Promise((resolve, reject) => {
            const data = {
                email: this.email.value,
                password: this.password.value
            }

            this.props.loginUser(data, resolve, reject)
        }).catch((error) => {
            this.password.value = ''
        })
    }

    setRef = (ref: HTMLInputElement, name: 'email' | 'password'): void => {
        this[name] = ref
    }

    render() {
        return (
            <Login
                handleSubmit={this.handleSubmit}
                setRef={this.setRef}
            />
        )
    }
}

// const mapStateToProps = () => ({
// })

const mapDispatchToProps: IDispatchProps = {
    loginUser,
}

export default connect(null, mapDispatchToProps)(LoginContainer)
