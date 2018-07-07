import * as React from 'react'
import { connect } from 'react-redux'

import { loginUser } from 'data/user/actions'

import Login from 'components/Auth/Login'

interface IOwnProps {}

interface IStateProps {}

interface IDispatchProps {
    loginUser: typeof loginUser
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class LoginContainer extends React.Component<IProps> {
    private email = React.createRef<HTMLInputElement>()
    private password = React.createRef<HTMLInputElement>()

    private handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()

        new Promise((resolve, reject) => {
            this.props.loginUser(
                {
                    email: this.email.current!.value,
                    password: this.password.current!.value
                },
                resolve,
                reject
            )
        }).catch((error) => {
            this.password.current!.value = ''
        })
    }

    public render() {
        return (
            <Login
                handleSubmit={this.handleSubmit}
                emailRef={this.email}
                passwordRef={this.password}
            />
        )
    }
}

// const mapStateToProps = () => ({
// })

const mapDispatchToProps: IDispatchProps = {
    loginUser
}

export default connect(
    null,
    mapDispatchToProps
)(LoginContainer)
