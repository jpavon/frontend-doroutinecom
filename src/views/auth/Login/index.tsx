import * as React from 'react'

import Layout from 'views/Layout'
import LoginContainer from 'views/auth/Login/LoginContainer'

const Login = () => (
    <Layout header={<title>Login</title>}>
        <LoginContainer />
    </Layout>
)

export default Login
