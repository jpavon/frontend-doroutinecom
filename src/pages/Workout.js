import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'pages/Layout'
import WorkoutContainer from 'containers/WorkoutContainer'

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
