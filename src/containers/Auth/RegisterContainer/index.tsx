import * as React from 'react'
import { connect } from 'react-redux'

import { registerUser, authUser } from 'data/user/actions'
import { showAlert } from 'data/ui/actions'

import Register from 'components/Auth/Register'

interface OwnProps {
}

interface StateProps {
}

interface DispatchProps {
    registerUser: (data: {
        name: string,
        email: string,
        password: string,
        passwordConfirmation: string
    }) => void
    authUser: () => void
    showAlert: () => void
}

interface Props extends OwnProps, StateProps, DispatchProps {}

class RegisterContainer extends React.Component<Props> {

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
        // .then((resp) => {
        //     if (resp.error) {
        //         this.password.value = ''
        //         this.passwordConfirmation.value = ''
        //         this.props.showAlert('error', resp.error.errors)
        //     } else {
        //         this.props.authUser(resp.payload.token)
        //     }
        // })
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

const mapDispatchToProps: DispatchProps = {
    registerUser,
    authUser,
    showAlert
}

export default connect(null, mapDispatchToProps)(RegisterContainer)