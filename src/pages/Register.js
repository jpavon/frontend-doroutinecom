import React, { Component } from 'react'
import Layout from 'pages/Layout'

const Register = () => (
    <Layout
        header={(
            <title>Register</title>
        )}
        loader={() => import('containers/RegisterContainer')}
    />
)

export default Register
