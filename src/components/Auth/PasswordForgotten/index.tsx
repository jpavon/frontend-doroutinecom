import * as React from 'react'

import { IPasswordForgottenData } from 'data/user/types'

import Input from 'components/Form/Input'
import Auth from 'components/Auth'
import Field from 'components/Field'

interface IProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    setRef: (ref: HTMLInputElement, name: keyof IPasswordForgottenData) => void
}

const PasswordForgotten: React.SFC<IProps> = ({handleSubmit, setRef}) => (
    <Auth
        className="password-forgotten"
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
    </Auth>
)

export default PasswordForgotten
