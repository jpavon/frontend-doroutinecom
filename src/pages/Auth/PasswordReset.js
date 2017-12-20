import React from 'react'
import Layout from 'pages/Layout'
import PasswordResetContainer from 'containers/Auth/PasswordResetContainer'

const PasswordReset = ({match}) => (
    <Layout
        header={(
            <title>Password Reset</title>
        )}
    >
        <PasswordResetContainer token={match.params.token} />
    </Layout>
)

export default PasswordReset
