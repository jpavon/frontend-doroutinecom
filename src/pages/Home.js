import React, { Component } from 'react'
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
                <div>
                    Home content.
                </div>
            </Layout>
        )
    }
}

export default Home
