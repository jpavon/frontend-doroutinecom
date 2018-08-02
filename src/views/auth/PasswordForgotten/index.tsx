import * as React from 'react'

import Layout from 'views/Layout'
import PasswordForgottenContainer from 'views/auth/PasswordForgotten/PasswordForgottenContainer'

const PasswordForgotten = () => (
    <Layout header={<title>Password Forgotten</title>}>
        <PasswordForgottenContainer />
    </Layout>
)

export default PasswordForgotten
