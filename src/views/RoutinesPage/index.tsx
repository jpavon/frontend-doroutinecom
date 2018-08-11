import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import NavBar from 'components/NavBar'
import Layout from 'views/Layout'
import List from './List'
import CreateButton from './CreateButton'

const Routines: React.SFC<RouteComponentProps<{}>> = () => (
    <Layout header={<title>Routines</title>} e2e="routines">
        <NavBar title="Routines" rightButton={<CreateButton />} />
        <List />
    </Layout>
)

export default Routines
