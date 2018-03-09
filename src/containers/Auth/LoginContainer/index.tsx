import * as React from 'react'
import { connect } from 'react-redux'

import { ILoginData, IUserActionArgs } from 'data/user/types'

import { loginUser } from 'data/user/actions'

import Login from 'components/Auth/Login'

interface IOwnProps {
}

interface IStateProps {
}

interface IDispatchProps {
    loginUser: IUserActionArgs['login']
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class LoginContainer extends React.Component<IProps> {

    email: HTMLInputElement
    password: HTMLInputElement

    handleSubmit = (event: React.FormEvent<HTMLInputElement>): void => {
        event.preventDefault()

        new Promise((resolve, reject) => {
            this.props.loginUser({
                email: this.email.value,
                password: this.password.value
            }, resolve, reject)
        }).catch((error) => {
            this.password.value = ''
        })
    }

    setRef = (ref: HTMLInputElement, name: keyof ILoginData): void => {
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
