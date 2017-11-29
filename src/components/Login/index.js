import React, { Component } from 'react'
import ErrorMessage from 'components/ErrorMessage'

const Login = ({handleSubmit, errors, setRef}) => (
    <form method="post" onSubmit={handleSubmit}>
        <ErrorMessage error={errors} />
        <label htmlFor="email">
            Email:
        </label>
        <input id="email" type="text" ref={(ref) => setRef(ref, 'email')} />
        <label htmlFor="password">
            Password:
        </label>
        <input id="password" type="password" ref={(ref) => setRef(ref, 'password')} />
        <input type="submit" value="Submit" />
    </form>
)

export default Login
