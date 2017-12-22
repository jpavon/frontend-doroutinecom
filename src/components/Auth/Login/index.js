import React from 'react'
import { Link } from 'react-router-dom'

import Input from 'components/Form/Input'
import Button from 'components/Button'
import Label from 'components/Form/Label'

import './style.css'

const Login = ({handleSubmit, errors, setRef}) => (
    <div className="login">
        <h1>Login</h1>
        <form method="post" onSubmit={handleSubmit}>
            <Label htmlFor="email">
                Email:
            </Label>
            <Input
                id="email"
                name="email"
                inputRef={(ref) => setRef(ref, 'email')}
            />
            <Label htmlFor="password">
                Password:
            </Label>
            <Input
                id="password"
                name="password"
                type="password"
                inputRef={(ref) => setRef(ref, 'password')}
            />
            <Button type="submit">Login</Button>
        </form>
        <div className="login-password-forgotten">
            <Link to="/password-forgotten">Password forgotten?</Link>
        </div>
    </div>
)

export default Login
