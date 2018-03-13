import * as React from 'react'

import { IRegisterData } from 'data/user/types'

import Auth from 'components/Auth'
import Field from 'components/Field'

import './style.css'

interface IProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    setRef: (ref: HTMLInputElement, name: keyof IRegisterData) => void
}

const Login = ({handleSubmit, setRef}: IProps) => (
    <Auth
        className="register"
        handleSubmit={handleSubmit}
    >
        <Field
            uncontrolled
            label="Name"
            id="name"
            placeholder="Type your name"
            inputRef={(ref: HTMLInputElement) => setRef(ref, 'name')}
        />
        <Field
            uncontrolled
            label="Email"
            type="email"
            id="email"
            placeholder="Type your email"
            inputRef={(ref: HTMLInputElement) => setRef(ref, 'email')}
        />
        <Field
            uncontrolled
            label="Password"
            type="password"
            id="password"
            placeholder="Type your password"
            inputRef={(ref: HTMLInputElement) => setRef(ref, 'password')}
        />
        <Field
            uncontrolled
            label="Type password again"
            type="password"
            id="passwordConfirmation"
            placeholder="Type your password again"
            inputRef={(ref: HTMLInputElement) => setRef(ref, 'passwordConfirmation')}
        />
    </Auth>
)

export default Login
