import * as React from 'react'

import Input from 'components/Form/Input'
import Auth from 'components/Auth'
import Field from 'components/Field'

import './style.scss'

interface IProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    nameRef: React.RefObject<HTMLInputElement>
    emailRef: React.RefObject<HTMLInputElement>
    passwordRef: React.RefObject<HTMLInputElement>
    passwordConfirmationRef: React.RefObject<HTMLInputElement>
}

const Login: React.SFC<IProps> = (props) => (
    <Auth className="register" handleSubmit={props.handleSubmit}>
        <Field label="Name" id="name">
            <Input
                id="name"
                name="name"
                placeholder="Type your name"
                inputRef={props.nameRef}
            />
        </Field>
        <Field label="Email" id="email">
            <Input
                id="email"
                type="email"
                name="email"
                placeholder="Type your email"
                inputRef={props.emailRef}
            />
        </Field>
        <Field label="Password" id="password">
            <Input
                id="password"
                type="password"
                name="password"
                placeholder="Type your password"
                inputRef={props.passwordRef}
            />
        </Field>
        <Field label="Type password again" id="passwordConfirmation">
            <Input
                id="passwordConfirmation"
                type="password"
                name="passwordConfirmation"
                placeholder="Type your password again"
                inputRef={props.passwordConfirmationRef}
            />
        </Field>
    </Auth>
)

export default Login
