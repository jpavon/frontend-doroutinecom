import * as React from 'react'
import { RouteComponentProps } from 'react-router'

import Layout from 'views/Layout'
import RoutineContainer from 'views/Routine/RoutineContainer'

interface Params {
    routineId: string
}

const Routine = ({ match }: RouteComponentProps<Params>) => (
    <Layout header={<title>Routine</title>}>
        <RoutineContainer routineId={Number(match.params.routineId)} />
    </Layout>
)

export default Routine
