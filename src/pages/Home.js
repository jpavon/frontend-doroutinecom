import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import Loadable from 'react-loadable'

import Layout from 'pages/Layout'

class Home extends Component {

    render() {
        return (
            <Layout>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <Fragment>
                    Home content.
                </Fragment>
            </Layout>
        )
    }
}

export default Home
