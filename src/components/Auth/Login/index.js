import React from 'react'
import { Link } from 'react-router-dom'

import Field from 'components/Field'
import Auth from 'components/Auth'

import './style.css'

const Login = ({handleSubmit, errors, setRef}) => (
    <Auth className="login" handleSubmit={handleSubmit} footer={(
        <div className="login-password-forgotten">
            <Link to="/password-forgotten">Password forgotten?</Link>
        </div>
    )}>
        <Field
            uncontrolled
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="type@your.email"
            inputRef={(ref) => setRef(ref, 'email')}
        />
        <Field
            uncontrolled
            label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="Type your password"
            inputRef={(ref) => setRef(ref, 'password')}
        />
    </Auth>
)

export default Login
