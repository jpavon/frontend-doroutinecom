import React from 'react'
import { Link } from 'react-router-dom'

import Alert from 'components/Alert'

const Login = ({handleSubmit, errors, setRef}) => (
    <div className="login">
        <h1>Login</h1>
        <form method="post" onSubmit={handleSubmit}>
            <Alert error message={errors} />
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
        <Link to="/password-forgotten">Password forgotten?</Link>
    </div>
)

export default Login
