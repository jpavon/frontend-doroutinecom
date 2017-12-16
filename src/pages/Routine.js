import React from 'react'
import Layout from 'pages/Layout'
import RoutineContainer from 'containers/RoutineContainer'

const Routine = ({match}) => (
    <Layout
        header={(
            <title>Routine</title>
        )}
    >
        <RoutineContainer
            routineSlug={match.params.routineSlug}
        />
    </Layout>
)

export default Routine
