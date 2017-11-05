import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Loadable from 'react-loadable'

import Layout from 'pages/Layout'
import Loading from 'components/Loading'

const Workouts = Loadable({
    loader: () => import('containers/WorkoutsContainer'),
    loading: Loading
})

class Home extends Component {

    render() {
        return (
            <Layout>
                <Helmet>
                    <title>Workouts</title>
                </Helmet>
                <Workouts />
            </Layout>
        )
    }
}

export default Home
