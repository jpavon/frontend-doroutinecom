import React from 'react'
import Layout from 'pages/Layout'
import RegisterContainer from 'containers/RegisterContainer'

const Register = () => (
    <Layout
        header={(
            <title>Register</title>
        )}
    >
        <RegisterContainer />
    </Layout>
)

export default Register
