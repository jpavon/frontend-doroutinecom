import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Loadable from 'react-loadable'

import Layout from 'pages/Layout'
import Loading from 'components/Loading'

const WorkoutContainer = Loadable({
    loader: () => import('containers/WorkoutContainer'),
    loading: Loading,
})

class Workout extends Component {

    render() {
        return (
            <Layout>
                <Helmet>
                    <title>Workout</title>
                </Helmet>
                <WorkoutContainer id={Number(this.props.match.params.id)} />
            </Layout>
        )
    }
}

export default Workout
