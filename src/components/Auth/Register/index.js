import React from 'react'

import Auth from 'components/Auth'
import Field from 'components/Field'

import './style.css'

const Login = ({handleSubmit, errors, setRef}) => (
    <Auth className="register" handleSubmit={handleSubmit}>
        <Field
            uncontrolled
            label="Name"
            id="name"
            placeholder="Type your name"
            inputRef={(ref) => setRef(ref, 'name')}
        />
        <Field
            uncontrolled
            label="Email"
            type="email"
            id="email"
            placeholder="Type your email"
            inputRef={(ref) => setRef(ref, 'email')}
        />
        <Field
            uncontrolled
            label="Password"
            type="password"
            id="password"
            placeholder="Type your password"
            inputRef={(ref) => setRef(ref, 'password')}
        />
        <Field
            uncontrolled
            label="Type password again"
            type="password"
            id="passwordConfirmation"
            placeholder="Type your password again"
            inputRef={(ref) => setRef(ref, 'passwordConfirmation')}
        />
    </Auth>
)

export default Login
