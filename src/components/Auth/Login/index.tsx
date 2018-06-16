import * as React from 'react'
import { Link } from 'react-router-dom'

import Input from 'components/Form/Input'
import Field from 'components/Field'
import Auth from 'components/Auth'

import './style.scss'

interface IProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    emailRef: React.RefObject<HTMLInputElement>
    passwordRef: React.RefObject<HTMLInputElement>
}

const Login: React.SFC<IProps> = (props) => (
    <Auth
        className="login"
        handleSubmit={props.handleSubmit}
        footer={
            <div className="login-password-forgotten">
                <Link to="/password-forgotten">Password forgotten?</Link>
            </div>
        }
    >
        <Field label="Email" id="email">
            <Input
                id="email"
                type="email"
                name="email"
                placeholder="type@your.email"
                inputRef={props.emailRef}
            />
        </Field>
        <Field label="Password" id="password">
            <Input
                id="password"
                name="password"
                type="password"
                placeholder="Type your password"
                inputRef={props.passwordRef}
            />
        </Field>
    </Auth>
)

export default Login
