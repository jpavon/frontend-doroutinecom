import * as React from 'react'
import { connect } from 'react-redux'

import { registerUser } from 'data/user/actions'

import Register from 'components/Auth/Register'

interface IOwnProps {}

interface IStateProps {}

interface IDispatchProps {
    registerUser: typeof registerUser
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class RegisterContainer extends React.Component<IProps> {
    private name: React.RefObject<HTMLInputElement> = React.createRef()
    private email: React.RefObject<HTMLInputElement> = React.createRef()
    private password: React.RefObject<HTMLInputElement> = React.createRef()
    private passwordConfirmation: React.RefObject<
        HTMLInputElement
    > = React.createRef()

    private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        new Promise((resolve, reject) => {
            this.props.registerUser(
                {
                    name: this.name.current!.value,
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
            <Register
                handleSubmit={this.handleSubmit}
                nameRef={this.name}
                emailRef={this.email}
                passwordRef={this.password}
                passwordConfirmationRef={this.passwordConfirmation}
            />
        )
    }
}

// const mapStateToProps = (state, props) => ({
// })

const mapDispatchToProps: IDispatchProps = {
    registerUser
}

export default connect(
    null,
    mapDispatchToProps
)(RegisterContainer)
