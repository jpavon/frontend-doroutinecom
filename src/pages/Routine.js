import React from 'react'
import Layout from 'pages/Layout'
import RoutineContainer from 'containers/RoutineContainer'

const Routine = () => (
    <Layout
        header={(
            <title>Routine</title>
        )}
    >
        <RoutineContainer />
    </Layout>
)

export default Routine
