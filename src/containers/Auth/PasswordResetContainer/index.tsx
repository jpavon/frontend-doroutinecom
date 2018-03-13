import * as React from 'react'
import { connect } from 'react-redux'

import { IPasswordResetData, IUserActionArgs } from 'data/user/types'

import { passwordResetUser } from 'data/user/actions'

import PasswordReset from 'components/Auth/PasswordReset'
import TopNav from 'components/TopNav'

interface IOwnProps {
    token: string
}

interface IStateProps {
}

interface IDispatchProps {
    passwordResetUser: IUserActionArgs['passwordReset']
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps { }

class PasswordResetContainer extends React.Component<IProps> {

    email: HTMLInputElement
    password: HTMLInputElement
    passwordConfirmation: HTMLInputElement

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        new Promise((resolve, reject) => {
            this.props.passwordResetUser({
                token: this.props.token,
                email: this.email.value,
                password: this.password.value,
                passwordConfirmation: this.passwordConfirmation.value
            }, resolve, reject)
        }).catch((error) => {
            this.password.value = ''
            this.passwordConfirmation.value = ''
        })
    }

    setRef = (ref: HTMLInputElement, name: keyof IPasswordResetData) => {
        this[name] = ref
    }

    render() {
        return (
            <>
                <TopNav
                    title="Password Reset"
                />
                <PasswordReset
                    handleSubmit={this.handleSubmit}
                    setRef={this.setRef}
                />
            </>
        )
    }
}

// const mapStateToProps = (state, props) => ({
// })

const mapDispatchToProps: IDispatchProps = {
    passwordResetUser,
}

export default connect(null, mapDispatchToProps)(PasswordResetContainer)
