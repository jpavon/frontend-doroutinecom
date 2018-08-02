import * as React from 'react'

import Layout from 'views/Layout'
import RegisterContainer from 'views/auth/Register/RegisterContainer'

const Register = () => (
    <Layout header={<title>Register</title>}>
        <RegisterContainer />
    </Layout>
)

export default Register
