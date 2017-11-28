import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Loadable from 'react-loadable'

import Layout from 'pages/Layout'
import Loading from 'components/Loading'

const RoutinesContainer = Loadable({
    loader: () => import('containers/RoutinesContainer'),
    loading: Loading,
})

class Routines extends Component {

    render() {
        return (
            <Layout>
                <Helmet>
                    <title>Routines</title>
                </Helmet>
                <RoutinesContainer></RoutinesContainer>
            </Layout>
        )
    }
}

export default Routines
