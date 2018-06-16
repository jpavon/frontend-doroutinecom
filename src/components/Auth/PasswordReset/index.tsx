import * as React from 'react'

import Input from 'components/Form/Input'
import Auth from 'components/Auth'
import Field from 'components/Field'

interface IProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    emailRef: React.RefObject<HTMLInputElement>
    passwordRef: React.RefObject<HTMLInputElement>
    passwordConfirmationRef: React.RefObject<HTMLInputElement>
}

const PasswordReset: React.SFC<IProps> = (props) => (
    <Auth className="password-reset" handleSubmit={props.handleSubmit}>
        <Field label="Email" id="email">
            <Input
                id="email"
                type="email"
                name="email"
                placeholder="Type your email"
                inputRef={props.emailRef}
            />
        </Field>

        <Field label="New Password" id="password">
            <Input
                id="password"
                type="password"
                name="password"
                placeholder="Type your new password"
                inputRef={props.passwordRef}
            />
        </Field>

        <Field label="Type new password again" id="password">
            <Input
                id="passwordConfirmation"
                type="password"
                name="passwordConfirmation"
                placeholder="Type your new password again"
                inputRef={props.passwordConfirmationRef}
            />
        </Field>
    </Auth>
)

export default PasswordReset
