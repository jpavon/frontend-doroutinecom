import * as React from 'react'

import Layout from 'views/Layout'
import RoutinesContainer from 'views/Routines/RoutinesContainer'

const Routines = () => (
    <Layout header={<title>Routines</title>}>
        <RoutinesContainer />
    </Layout>
)

export default Routines
