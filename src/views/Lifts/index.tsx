import * as React from 'react'

import Layout from 'views/Layout'
import LiftsContainer from 'views/Lifts/LiftsContainer'

const Lifts = () => (
    <Layout header={<title>Lifts</title>}>
        <LiftsContainer />
    </Layout>
)

export default Lifts
