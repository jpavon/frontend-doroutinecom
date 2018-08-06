import * as React from 'react'

import NavBar from 'components/NavBar'
import Layout from 'views/Layout'
import List from 'views/Lifts/List'
import CreateButton from 'views/Lifts/CreateButton'

const Lifts = () => (
    <Layout header={<title>Lifts</title>} e2e="lifts">
        <NavBar title="Lifts" rightButton={<CreateButton />} />
        <List />
    </Layout>
)

export default Lifts
