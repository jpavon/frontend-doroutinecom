import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Loadable from 'react-loadable'

import Layout from 'pages/Layout'
import Loading from 'components/Loading'

const RegisterContainer = Loadable({
    loader: () => import('containers/RegisterContainer'),
    loading: Loading,
})

class Register extends Component {

    render() {
        return (
            <Layout>
                <Helmet>
                    <title>Register</title>
                </Helmet>
                <RegisterContainer></RegisterContainer>
            </Layout>
        )
    }
}

export default Register
