import * as React from 'react'

import { IPasswordResetData } from 'data/user/types'

import Input from 'components/Form/Input'
import Auth from 'components/Auth'
import Field from 'components/Field'

interface IProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    setRef: (ref: HTMLInputElement, name: keyof IPasswordResetData) => void
}

const PasswordReset: React.SFC<IProps> = ({handleSubmit, setRef}) => (
    <Auth
        className="password-reset"
        handleSubmit={handleSubmit}
    >
        <Field label="Email" id="email">
            <Input
                id="email"
                type="email"
                name="email"
                placeholder="Type your email"
                inputRef={(ref: HTMLInputElement) => setRef(ref, 'email')}
            />
        </Field>

        <Field label="New Password" id="password">
            <Input
                id="password"
                type="password"
                name="password"
                placeholder="Type your new password"
                inputRef={(ref: HTMLInputElement) => setRef(ref, 'password')}
            />
        </Field>

        <Field label="Type new password again" id="password">
            <Input
                id="passwordConfirmation"
                type="password"
                name="passwordConfirmation"
                placeholder="Type your new password again"
                inputRef={(ref: HTMLInputElement) => setRef(ref, 'passwordConfirmation')}
            />
        </Field>
    </Auth>
)

export default PasswordReset
