import * as React from 'react'

import Layout from 'pages/Layout'
import PasswordForgottenContainer from 'containers/Auth/PasswordForgottenContainer'

const PasswordForgotten = () => (
    <Layout header={<title>Password Forgotten</title>}>
        <PasswordForgottenContainer />
    </Layout>
)

export default PasswordForgotten
