import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import Layout from 'views/Layout'
import NavBar from 'components/NavBar'
import Button from 'components/Button'
import Form from './Form'
import Graph from './Graph'
import Table from './Table'
import DeleteButton from './DeleteButton'

interface Params {
    liftId: string
}

const Lift: React.SFC<RouteComponentProps<Params>> = (props) => {
    const liftId = Number(props.match.params.liftId)
    return (
        <Layout header={<title>Lift</title>} e2e="lift">
            <NavBar
                title="Edit lift"
                leftButton={
                    <Button to="/lifts" icon="back">
                        Back
                    </Button>
                }
            />
            <Form liftId={liftId} />
            <NavBar title="Recent progress" />
            <Graph liftId={liftId} />
            <NavBar title="Top sets" />
            <Table liftId={liftId} />
            <NavBar rightButton={<DeleteButton liftId={liftId} />} />
        </Layout>
    )
}

export default Lift
