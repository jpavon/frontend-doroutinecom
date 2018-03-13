import * as React from 'react'

import { IPasswordForgottenData } from 'data/user/types'

import Auth from 'components/Auth'
import Field from 'components/Field'

interface IProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    setRef: (ref: HTMLInputElement, name: keyof IPasswordForgottenData) => void
}

const PasswordForgotten = ({handleSubmit, setRef}: IProps) => (
    <Auth
        className="password-forgotten"
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
    </Auth>
)

export default PasswordForgotten
