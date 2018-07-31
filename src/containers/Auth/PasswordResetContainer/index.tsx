import * as React from 'react'
import { connect } from 'react-redux'

import { passwordResetUser } from 'data/user/actions'

import PasswordReset from 'components/Auth/PasswordReset'
import NavBar from 'components/NavBar'

interface IOwnProps {
    token: string
}

interface IStateProps {}

interface IDispatchProps {
    passwordResetUser: typeof passwordResetUser
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class PasswordResetContainer extends React.Component<IProps> {
    private email = React.createRef<HTMLInputElement>()
    private password = React.createRef<HTMLInputElement>()
    private passwordConfirmation = React.createRef<HTMLInputElement>()

    private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        new Promise((resolve, reject) => {
            this.props.passwordResetUser(
                {
                    token: this.props.token,
                    email: this.email.current!.value,
                    password: this.password.current!.value,
                    passwordConfirmation: this.passwordConfirmation.current!
                        .value
                },
                resolve,
                reject
            )
        }).catch((error) => {
            this.password.current!.value = ''
            this.passwordConfirmation.current!.value = ''
        })
    }

    public render() {
        return (
            <>
                <NavBar title="Password Reset" />
                <PasswordReset
                    handleSubmit={this.handleSubmit}
                    emailRef={this.email}
                    passwordRef={this.password}
                    passwordConfirmationRef={this.passwordConfirmation}
                />
            </>
        )
    }
}

// const mapStateToProps = (state, props) => ({
// })

const mapDispatchToProps: IDispatchProps = {
    passwordResetUser
}

export default connect(
    null,
    mapDispatchToProps
)(PasswordResetContainer)
