import * as React from 'react'
import { RouteComponentProps } from 'react-router'

import Layout from 'views/Layout'
import LiftContainer from 'views/Lift/LiftContainer'
import NavBar from 'components/NavBar'
import Button from 'components/Button'
import GraphLiftContainer from 'views/Lift/GraphLiftContainer'
import LiftSetsTableContainer from 'views/Lift/LiftSetsTableContainer'
import LiftDeleteContainer from 'views/Lift/LiftDeleteContainer'

interface IParams {
    liftId: string
}

const Lift = ({ match }: RouteComponentProps<IParams>) => (
    <Layout header={<title>Lift</title>}>
        <NavBar
            title="Edit lift"
            leftButton={
                <Button to="/lifts" icon="back">
                    Back
                </Button>
            }
        />
        <LiftContainer liftId={Number(match.params.liftId)} />
        <NavBar title="Recent progress" />
        <GraphLiftContainer liftId={Number(match.params.liftId)} />
        <NavBar title="Top sets" />
        <LiftSetsTableContainer liftId={Number(match.params.liftId)} />
        <LiftDeleteContainer liftId={Number(match.params.liftId)} />
    </Layout>
)

export default Lift
