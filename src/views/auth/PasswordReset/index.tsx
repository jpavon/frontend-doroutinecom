import * as React from 'react'
import { RouteComponentProps } from 'react-router'

import Layout from 'views/Layout'
import Form from 'views/auth/PasswordReset/Form'

interface Params {
    token: string
}

const PasswordReset = ({ match }: RouteComponentProps<Params>) => (
    <Layout header={<title>Password Reset</title>} e2e="password-reset">
        <Form token={match.params.token} />
    </Layout>
)

export default PasswordReset
