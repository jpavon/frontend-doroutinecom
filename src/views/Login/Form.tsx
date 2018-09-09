import * as React from 'react'
import { connect } from 'react-redux'

import { loginUserRequest } from 'data/user/actions'
import Input from 'components/Form/Input'
import Field from 'components/Field'
import Auth from 'components/Auth'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class Form extends React.Component<Props> {
    private email = React.createRef<HTMLInputElement>()
    private password = React.createRef<HTMLInputElement>()

    private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        new Promise((resolve, reject) => {
            this.props.loginUserRequest(
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
            <Auth handleSubmit={this.handleSubmit}>
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
    loginUserRequest
}

export default connect(
    null,
    mapDispatchToProps
)(Form)
