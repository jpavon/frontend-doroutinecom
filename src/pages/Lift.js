import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Loadable from 'react-loadable'

import Layout from 'pages/Layout'
import Loading from 'components/Loading'

const LiftContainer = Loadable({
    loader: () => import('containers/LiftContainer'),
    loading: Loading,
})

class Lifts extends Component {

    render() {
        return (
            <Layout>
                <Helmet>
                    <title>Lifts</title>
                </Helmet>
                <LiftContainer id={Number(this.props.match.params.id)}></LiftContainer>
            </Layout>
        )
    }
}

export default Lifts
