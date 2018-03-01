import * as React from 'react'
import { connect } from 'react-redux'

import { IRegisterData } from 'data/user/types'

import { registerUser } from 'data/user/actions'
import { showAlert } from 'data/ui/actions'

import Register from 'components/Auth/Register'

interface IOwnProps {
}

interface IStateProps {
}

interface IDispatchProps {
    registerUser: (data: IRegisterData) => void
    showAlert: () => void
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class RegisterContainer extends React.Component<IProps> {

    name: HTMLInputElement
    email: HTMLInputElement
    password: HTMLInputElement
    passwordConfirmation: HTMLInputElement

    handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()

        this.props.registerUser({
            name: this.name.value,
            email: this.email.value,
            password: this.password.value,
            passwordConfirmation: this.passwordConfirmation.value
        })

        this.password.value = ''
        this.passwordConfirmation.value = ''
    }

    setRef = (ref: HTMLInputElement, name: 'name' | 'email' | 'password' | 'passwordConfirmation') => {
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
    showAlert
}

export default connect(null, mapDispatchToProps)(RegisterContainer)
