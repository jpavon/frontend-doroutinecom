import * as React from 'react'

import { IPasswordResetData } from 'data/user/types'

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
        <Field
            uncontrolled
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Type your email"
            inputRef={(ref: HTMLInputElement) => setRef(ref, 'email')}
        />
        <Field
            uncontrolled
            label="New Password"
            type="password"
            id="password"
            placeholder="Type your new password"
            inputRef={(ref: HTMLInputElement) => setRef(ref, 'password')}
        />
        <Field
            uncontrolled
            label="Type new password again"
            type="password"
            id="passwordConfirmation"
            placeholder="Type your new password again"
            inputRef={(ref: HTMLInputElement) => setRef(ref, 'passwordConfirmation')}
        />
    </Auth>
)

export default PasswordReset
