import React from 'react'
import Layout from 'pages/Layout'
import LoginContainer from 'containers/LoginContainer'

const Login = () => (
    <Layout
        header={(
            <title>Login</title>
        )}
    >
        <LoginContainer />
    </Layout>
)

export default Login
