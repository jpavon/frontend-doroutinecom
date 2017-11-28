import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Loadable from 'react-loadable'

import Layout from 'pages/Layout'
import Loading from 'components/Loading'

const RoutineContainer = Loadable({
    loader: () => import('containers/RoutineContainer'),
    loading: Loading,
})

class Routine extends Component {

    render() {
        return (
            <Layout>
                <Helmet>
                    <title>Routine</title>
                </Helmet>
                <RoutineContainer></RoutineContainer>
            </Layout>
        )
    }
}

export default Routine
