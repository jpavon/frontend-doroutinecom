import * as React from 'react'
import { connect } from 'react-redux'

import { registerUser } from 'data/user/actions'

import Input from 'components/Form/Input'
import Auth from 'components/Auth'
import Field from 'components/Field'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class Form extends React.Component<Props> {
    private name = React.createRef<HTMLInputElement>()
    private email = React.createRef<HTMLInputElement>()
    private password = React.createRef<HTMLInputElement>()
    private passwordConfirmation = React.createRef<HTMLInputElement>()

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
        }).catch(() => {
            this.password.current!.value = ''
            this.passwordConfirmation.current!.value = ''
        })
    }

    public render() {
        return (
            <Auth handleSubmit={this.handleSubmit}>
                <Field label="Name" id="name">
                    <Input
                        id="name"
                        name="name"
                        placeholder="Type your name"
                        inputRef={this.name}
                    />
                </Field>
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
                        type="password"
                        name="password"
                        placeholder="Type your password"
                        inputRef={this.password}
                    />
                </Field>
                <Field label="Type password again" id="passwordConfirmation">
                    <Input
                        id="passwordConfirmation"
                        type="password"
                        name="passwordConfirmation"
                        placeholder="Type your password again"
                        inputRef={this.passwordConfirmation}
                    />
                </Field>
            </Auth>
        )
    }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
    registerUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)
