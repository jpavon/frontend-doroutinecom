import * as React from 'react'

import { IRegisterData } from 'data/user/types'

import Input from 'components/Form/Input'
import Auth from 'components/Auth'
import Field from 'components/Field'

import './style.css'

interface IProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    setRef: (ref: HTMLInputElement, name: keyof IRegisterData) => void
}

const Login: React.SFC<IProps> = ({handleSubmit, setRef}) => (
    <Auth
        className="register"
        handleSubmit={handleSubmit}
    >
        <Field label="Name" id="name">
            <Input
                id="name"
                name="name"
                placeholder="Type your name"
                inputRef={(ref: HTMLInputElement) => setRef(ref, 'name')}
            />
        </Field>
        <Field label="Email" id="email">
            <Input
                id="email"
                type="email"
                name="email"
                placeholder="Type your email"
                inputRef={(ref: HTMLInputElement) => setRef(ref, 'email')}
            />
        </Field>
        <Field label="Password" id="password">
            <Input
                id="password"
                type="password"
                name="password"
                placeholder="Type your password"
                inputRef={(ref: HTMLInputElement) => setRef(ref, 'password')}
            />
        </Field>
        <Field label="Type password again" id="passwordConfirmation">
            <Input
                id="passwordConfirmation"
                type="password"
                name="passwordConfirmation"
                placeholder="Type your password again"
                inputRef={(ref: HTMLInputElement) => setRef(ref, 'passwordConfirmation')}
            />
        </Field>
    </Auth>
)

export default Login
