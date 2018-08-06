import * as React from 'react'

import Layout from 'views/Layout'
import Form from 'views/auth/Register/Form'

const Register = () => (
    <Layout header={<title>Register</title>} e2e="register">
        <Form />
    </Layout>
)

export default Register
