import * as React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import Layout from 'views/shared/Layout'
import Form from './Form'
import { LoginPasswordForgotten } from './style'

const Login: React.SFC<RouteComponentProps<{}>> = () => (
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
