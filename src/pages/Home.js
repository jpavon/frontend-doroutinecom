import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'pages/Layout'
import WorkoutsContainer from 'containers/WorkoutsContainer'

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
