import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Layout from './Layout'
import WorkoutsContainer from 'models/workouts/containers/WorkoutsContainer'

class Home extends Component {

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

export default Home
