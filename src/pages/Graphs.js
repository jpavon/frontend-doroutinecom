import React from 'react'
import Layout from 'pages/Layout'
import GraphsContainer from 'containers/GraphsContainer'

const Graphs = () => (
    <Layout
        header={(
            <title>Graphs</title>
        )}
    >
        <GraphsContainer />
    </Layout>
)

export default Graphs
