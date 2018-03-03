import * as React from 'react'
import { RouteComponentProps } from 'react-router'

import Layout from 'pages/Layout'
import LiftContainer from 'containers/LiftContainer'

interface IParams {
    liftId: string
}

const Lift = ({match}: RouteComponentProps<IParams>) => (
    <Layout
        header={(
            <title>Lift</title>
        )}
    >
        <LiftContainer
            liftId={Number(match.params.liftId)}
        />
    </Layout>
)

export default Lift
