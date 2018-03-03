import * as React from 'react'
import { RouteComponentProps } from 'react-router'

import Layout from 'pages/Layout'
import RoutineContainer from 'containers/RoutineContainer'

interface IParams {
    routineId: string
}

const Routine = ({match}: RouteComponentProps<IParams>) => (
    <Layout
        header={(
            <title>Routine</title>
        )}
    >
        <RoutineContainer
            routineId={Number(match.params.routineId)}
        />
    </Layout>
)

export default Routine
