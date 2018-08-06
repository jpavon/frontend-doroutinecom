import * as React from 'react'
import { Link } from 'react-router-dom'

import Layout from 'views/Layout'
import Form from 'views/auth/Login/Form'
import { LoginPasswordForgotten } from './style'

const Login = () => (
    <Layout header={<title>Login</title>} e2e="login">
        <Form />
        <LoginPasswordForgotten>
            <Link
                to="/password-forgotten"
                data-e2e="login-password-forgotten-button"
            >
                Password forgotten?
            </Link>
        </LoginPasswordForgotten>
    </Layout>
)

export default Login
