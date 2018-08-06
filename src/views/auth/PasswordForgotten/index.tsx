import * as React from 'react'

import NavBar from 'components/NavBar'
import Layout from 'views/Layout'
import Form from 'views/auth/PasswordForgotten/Form'

const PasswordForgotten = () => (
    <Layout header={<title>Password Forgotten</title>} e2e="password-forgotten">
        <NavBar title="Password Forgotten" />
        <Form />
    </Layout>
)

export default PasswordForgotten
