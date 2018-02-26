import * as React from 'react'
import { Link } from 'react-router-dom'

import Field from 'components/Field'
import Auth from 'components/Auth'

import './style.css'

interface IProps {
    handleSubmit: (event: React.FormEvent<HTMLInputElement>) => void
    setRef: (ref: HTMLInputElement, name: 'email' | 'password') => void
}

const Login = (props: IProps) => (
    <Auth
        className="login"
        handleSubmit={props.handleSubmit}
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
            inputRef={(ref: HTMLInputElement) => props.setRef(ref, 'email')}
        />
        <Field
            uncontrolled
            label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="Type your password"
            inputRef={(ref: HTMLInputElement) => props.setRef(ref, 'password')}
        />
    </Auth>
)

export default Login
