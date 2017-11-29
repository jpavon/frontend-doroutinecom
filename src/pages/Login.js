import React from 'react'
import Layout from 'pages/Layout'

const Login = () => (
    <Layout
        header={(
            <title>Login</title>
        )}
        loader={() => import('containers/LoginContainer')}
    />
)

export default Login
