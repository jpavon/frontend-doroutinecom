import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import Layout from 'views/Layout'
import Form from './Form'

const Register: React.SFC<RouteComponentProps<{}>> = () => (
    <Layout header={<title>Register</title>} e2e="register">
        <Form />
    </Layout>
)

export default Register
