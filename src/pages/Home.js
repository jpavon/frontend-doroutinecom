import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Loadable from 'react-loadable'

import Layout from 'pages/Layout'
import Loading from 'components/Loading'

const HomeContainer = Loadable.Map({
    loader: {
        LiftsContainer: () => import('containers/LiftsContainer'),
        BlocksContainer: () => import('containers/BlocksContainer'),
    },
    render(loaded, props) {
        const LiftsContainer = loaded.LiftsContainer.default
        const BlocksContainer = loaded.BlocksContainer.default
        return [
            <LiftsContainer key={1} />,
            <BlocksContainer key={2} />
        ]
    },
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
