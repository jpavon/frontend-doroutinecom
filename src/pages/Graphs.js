import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Loadable from 'react-loadable'

import Layout from 'pages/Layout'
import Loading from 'components/Loading'

const GraphContainer = Loadable({
    loader: () => import('containers/GraphContainer'),
    loading: Loading,
})

class Graphs extends Component {

    render() {
        return (
            <Layout>
                <Helmet>
                    <title>Graphs</title>
                </Helmet>
                <GraphContainer></GraphContainer>
            </Layout>
        )
    }
}

export default Graphs
