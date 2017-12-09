import React, { Fragment } from 'react'
import ErrorMessage from 'components/ErrorMessage'

const Login = ({handleSubmit, errors, setRef}) => (
    <div className="login">
        <h1>Login</h1>
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
    </div>
)

export default Login
