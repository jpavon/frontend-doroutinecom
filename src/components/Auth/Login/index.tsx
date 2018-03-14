import * as React from 'react'
import { Link } from 'react-router-dom'

import { ILoginData } from 'data/user/types'

import Field from 'components/Field'
import Auth from 'components/Auth'

import './style.css'

interface IProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    setRef: (ref: HTMLInputElement, name: keyof ILoginData) => void
}

const Login: React.SFC<IProps> = ({handleSubmit, setRef}) => (
    <Auth
        className="login"
        handleSubmit={handleSubmit}
        footer={(
            <div className="login-password-forgotten">
                <Link to="/password-forgotten">Password forgotten?</Link>
            </div>
        )}
    >
        <Field
            uncontrolled
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="type@your.email"
            inputRef={(ref: HTMLInputElement) => setRef(ref, 'email')}
        />
        <Field
            uncontrolled
            label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="Type your password"
            inputRef={(ref: HTMLInputElement) => setRef(ref, 'password')}
        />
    </Auth>
)

export default Login
