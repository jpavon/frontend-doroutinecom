import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import NavBar from 'components/NavBar'
import Layout from 'views/Layout'
import Form from './Form'

const PasswordForgotten: React.SFC<RouteComponentProps<{}>> = () => (
    <Layout header={<title>Password Forgotten</title>} e2e="password-forgotten">
        <NavBar title="Password Forgotten" />
        <Form />
    </Layout>
)

export default PasswordForgotten
