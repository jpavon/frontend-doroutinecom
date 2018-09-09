import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import NavBar from 'components/NavBar'
import Layout from 'views/shared/Layout'
import List from './List'
import CreateButton from './CreateButton'

const Lifts: React.SFC<RouteComponentProps<{}>> = () => (
    <Layout header={<title>Lifts</title>} e2e="lifts">
        <NavBar title="Lifts" rightButton={<CreateButton />} />
        <List />
    </Layout>
)

export default Lifts
