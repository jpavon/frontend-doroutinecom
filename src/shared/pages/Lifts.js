import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Layout from './Layout'

class Lifts extends Component {

    render() {
        return (
            <Layout>
                <Helmet>
                    <title>Lifts</title>
                </Helmet>
                Lift container...
            </Layout>
        )
    }
}

export default Lifts
