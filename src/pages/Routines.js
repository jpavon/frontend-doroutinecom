import React from 'react'
import Layout from 'pages/Layout'
import RoutinesContainer from 'containers/RoutinesContainer'

const Routines = () => (
    <Layout
        header={(
            <title>Routines</title>
        )}
    >
        <RoutinesContainer />
    </Layout>
)

export default Routines
