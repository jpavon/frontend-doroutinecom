import * as React from 'react'
import { connect } from 'react-redux'

import { passwordForgottenUser } from 'data/user/actions'

import NavBar from 'components/NavBar'
import Input from 'components/Form/Input'
import Auth from 'components/Auth'
import Field from 'components/Field'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class PasswordForgottenContainer extends React.Component<Props> {
    private email = React.createRef<HTMLInputElement>()

    private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        this.props.passwordForgottenUser({
            email: this.email.current!.value
        })
    }

    public render() {
        return (
            <>
                <NavBar title="Password Forgotten" />
                <Auth e2e="password-forgotten" handleSubmit={this.handleSubmit}>
                    <Field label="Email" id="email">
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Type your email"
                            inputRef={this.email}
                        />
                    </Field>
                </Auth>
            </>
        )
    }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
    passwordForgottenUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PasswordForgottenContainer)
