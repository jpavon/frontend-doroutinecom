import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { loginUser } from 'data/user/actions'
import Input from 'components/Form/Input'
import Field from 'components/Field'
import Auth from 'components/Auth'
import { LoginPasswordForgotten } from './style'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class LoginContainer extends React.Component<Props> {
    private email = React.createRef<HTMLInputElement>()
    private password = React.createRef<HTMLInputElement>()

    private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
        }).catch(() => {
            this.password.current!.value = ''
        })
    }

    public render() {
        return (
            <Auth
                e2e="login"
                handleSubmit={this.handleSubmit}
                footer={
                    <LoginPasswordForgotten>
                        <Link
                            to="/password-forgotten"
                            data-e2e="login-password-forgotten-button"
                        >
                            Password forgotten?
                        </Link>
                    </LoginPasswordForgotten>
                }
            >
                <Field label="Email" id="email">
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Type your email"
                        inputRef={this.email}
                    />
                </Field>
                <Field label="Password" id="password">
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Type your password"
                        inputRef={this.password}
                    />
                </Field>
            </Auth>
        )
    }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
    loginUser
}

export default connect(
    null,
    mapDispatchToProps
)(LoginContainer)
