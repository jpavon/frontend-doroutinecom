import React from 'react'
import Layout from 'pages/Layout'

const Graphs = () => (
    <Layout
        header={(
            <title>Graphs</title>
        )}
        loader={() => import('containers/GraphsContainer')}
    />
)

export default Graphs
