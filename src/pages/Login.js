import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Loadable from 'react-loadable'

import Layout from 'pages/Layout'
import Loading from 'components/Loading'

const LoginContainer = Loadable({
    loader: () => import('containers/LoginContainer'),
    loading: Loading,
})

class Login extends Component {

    render() {
        return (
            <Layout>
                <Helmet>
                    <title>Login</title>
                </Helmet>
                <LoginContainer></LoginContainer>
            </Layout>
        )
    }
}

export default Login
