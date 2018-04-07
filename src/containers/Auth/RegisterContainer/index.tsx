import * as React from 'react'
import { connect } from 'react-redux'

import { IRegisterData } from 'data/user/types'

import { registerUser } from 'data/user/actions'

import Register from 'components/Auth/Register'

interface IOwnProps {
}

interface IStateProps {
}

interface IDispatchProps {
    registerUser: typeof registerUser
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class RegisterContainer extends React.Component<IProps> {

    name: HTMLInputElement
    email: HTMLInputElement
    password: HTMLInputElement
    passwordConfirmation: HTMLInputElement

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        new Promise((resolve, reject) => {
            this.props.registerUser({
                name: this.name.value,
                email: this.email.value,
                password: this.password.value,
                passwordConfirmation: this.passwordConfirmation.value
            }, resolve, reject)
        }).catch((error) => {
            this.password.value = ''
            this.passwordConfirmation.value = ''
        })
    }

    setRef = (ref: HTMLInputElement, name: keyof IRegisterData) => {
        this[name] = ref
    }

    render() {
        return (
            <Register
                handleSubmit={this.handleSubmit}
                setRef={this.setRef}
            />
        )
    }
}

// const mapStateToProps = (state, props) => ({
// })

const mapDispatchToProps: IDispatchProps = {
    registerUser,
}

export default connect(null, mapDispatchToProps)(RegisterContainer)
