import * as React from 'react'

import NavBar from 'components/NavBar'
import Layout from 'views/Layout'
import List from 'views/Routines/List'
import CreateButton from 'views/Routines/CreateButton'

const Routines = () => (
    <Layout header={<title>Routines</title>} e2e="routines">
        <NavBar title="Routines" rightButton={<CreateButton />} />
        <List />
    </Layout>
)

export default Routines
