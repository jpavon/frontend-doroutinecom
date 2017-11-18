import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Loadable from 'react-loadable'

import Layout from 'pages/Layout'
import Loading from 'components/Loading'

const HomeContainer = Loadable({
    loader: () => import('containers/HomeContainer'),
    loading: Loading
})

class Home extends Component {

    render() {
        return (
            <Layout>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <HomeContainer />
            </Layout>
        )
    }
}

export default Home
