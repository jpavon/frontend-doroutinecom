import React from 'react'
import { Link } from 'react-router-dom'

import Input from 'components/Form/Input'
import Button from 'components/Button'
import Label from 'components/Form/Label'
import Section from 'components/Section'

import './style.css'

const Login = ({handleSubmit, errors, setRef}) => (
    <Section small title="Login" className="login">
        <form method="post" onSubmit={handleSubmit}>
            <Label htmlFor="email">
                Email
            </Label>
            <Input
                id="email"
                name="email"
                size="large"
                inputRef={(ref) => setRef(ref, 'email')}
            />
            <Label htmlFor="password">
                Password
            </Label>
            <Input
                id="password"
                name="password"
                type="password"
                size="large"
                inputRef={(ref) => setRef(ref, 'password')}
            />
            <Button type="submit">Login</Button>
        </form>
        <div className="login-password-forgotten">
            <Link to="/password-forgotten">Password forgotten?</Link>
        </div>
    </Section>
)

export default Login
