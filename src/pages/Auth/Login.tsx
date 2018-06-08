import * as React from 'react'

import Layout from 'pages/Layout'
import LoginContainer from 'containers/Auth/LoginContainer'

const Login = () => (
    <Layout header={<title>Login</title>}>
        <LoginContainer />
    </Layout>
)

export default Login
