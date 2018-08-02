import * as React from 'react'

import Layout from 'views/Layout'
import WorkoutsContainer from 'views/Workouts/WorkoutsContainer'

const Workouts: React.SFC = () => (
    <Layout header={<title>Workouts</title>}>
        <WorkoutsContainer />
    </Layout>
)

export default Workouts
