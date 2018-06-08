import * as React from 'react'

import Layout from 'pages/Layout'
import WorkoutsContainer from 'containers/WorkoutsContainer'

const Workouts = () => (
    <Layout header={<title>Workouts</title>}>
        <WorkoutsContainer />
    </Layout>
)

export default Workouts
