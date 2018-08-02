import * as React from 'react'
import { connect } from 'react-redux'

import { passwordResetUser } from 'data/user/actions'

import NavBar from 'components/NavBar'
import Input from 'components/Form/Input'
import Auth from 'components/Auth'
import Field from 'components/Field'

interface OwnProps {
    token: string
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class PasswordResetContainer extends React.Component<Props> {
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
        }).catch(() => {
            this.password.current!.value = ''
            this.passwordConfirmation.current!.value = ''
        })
    }

    public render() {
        return (
            <>
                <NavBar title="Password Reset" />
                <Auth e2e="password-reset" handleSubmit={this.handleSubmit}>
                    <Field label="Email" id="email">
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Type your email"
                            inputRef={this.email}
                        />
                    </Field>

                    <Field label="New Password" id="password">
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Type your new password"
                            inputRef={this.password}
                        />
                    </Field>

                    <Field label="Type new password again" id="password">
                        <Input
                            id="passwordConfirmation"
                            type="password"
                            name="passwordConfirmation"
                            placeholder="Type your new password again"
                            inputRef={this.passwordConfirmation}
                        />
                    </Field>
                </Auth>
            </>
        )
    }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
    passwordResetUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PasswordResetContainer)
