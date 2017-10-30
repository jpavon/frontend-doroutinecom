import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import Layout from './Layout'

class NoMatch extends Component {

    render() {
        return (
            <Layout>
                <Helmet>
                    <title>Page not found.</title>
                </Helmet>
                Page not found, go <Link to="/">home</Link>
            </Layout>
        )
    }
}

export default NoMatch
