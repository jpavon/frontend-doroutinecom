import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Loadable from 'react-loadable'

import Layout from 'pages/Layout'
import Loading from 'components/Loading'

const LiftsContainer = Loadable({
    loader: () => import('containers/LiftsContainer'),
    loading: Loading,
})

class Lifts extends Component {

    render() {
        return (
            <Layout>
                <Helmet>
                    <title>Lifts</title>
                </Helmet>
                <LiftsContainer />
            </Layout>
        )
    }
}

export default Lifts