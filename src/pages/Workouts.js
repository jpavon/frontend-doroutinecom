import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Loadable from 'react-loadable'

import Layout from 'pages/Layout'
import Loading from 'components/Loading'

const WorkoutsContainer = Loadable({
    loader: () => import('containers/WorkoutsContainer'),
    loading: Loading
})

class Workouts extends Component {

    render() {
        return (
            <Layout>
                <Helmet>
                    <title>Workouts</title>
                </Helmet>
                <WorkoutsContainer />
            </Layout>
        )
    }
}

export default Workouts
