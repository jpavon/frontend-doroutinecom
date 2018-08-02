import * as React from 'react'
import { RouteComponentProps } from 'react-router'

import Layout from 'views/Layout'
import PasswordResetContainer from 'views/auth/PasswordReset/PasswordResetContainer'

interface Params {
    token: string
}

const PasswordReset = ({ match }: RouteComponentProps<Params>) => (
    <Layout header={<title>Password Reset</title>}>
        <PasswordResetContainer token={match.params.token} />
    </Layout>
)

export default PasswordReset
