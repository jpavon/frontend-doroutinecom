import * as React from 'react'
import { RouteComponentProps } from 'react-router'

import Layout from 'pages/Layout'
import PasswordResetContainer from 'containers/Auth/PasswordResetContainer'

interface IParams {
    token: string
}

const PasswordReset = ({ match }: RouteComponentProps<IParams>) => (
    <Layout header={<title>Password Reset</title>}>
        <PasswordResetContainer token={match.params.token} />
    </Layout>
)

export default PasswordReset
