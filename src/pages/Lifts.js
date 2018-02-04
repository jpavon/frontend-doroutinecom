import React from 'react'
import Layout from 'pages/Layout'
import LiftsContainer from 'containers/LiftsContainer'

const Lifts = ({match}) => (
    <Layout
        header={(
            <title>Lifts</title>
        )}
    >
        <LiftsContainer />
    </Layout>
)

export default Lifts
