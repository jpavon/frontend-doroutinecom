import React from 'react'
import Layout from 'pages/Layout'
import WorkoutsContainer from 'containers/WorkoutsContainer'

const Workouts = ({match}) => (
    <Layout
        header={(
            <title>Workouts</title>
        )}
    >
        <WorkoutsContainer />
    </Layout>
)

export default Workouts
