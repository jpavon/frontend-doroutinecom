import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import Layout from 'views/Layout'
import Form from 'views/auth/PasswordReset/Form'

interface Params {
    token: string
}

const PasswordReset: React.SFC<RouteComponentProps<Params>> = (props) => (
    <Layout header={<title>Password Reset</title>} e2e="password-reset">
        <Form token={props.match.params.token} />
    </Layout>
)

export default PasswordReset
