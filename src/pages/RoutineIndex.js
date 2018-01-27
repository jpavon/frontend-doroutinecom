import React from 'react'
import Layout from 'pages/Layout'
import RoutineIndexContainer from 'containers/RoutineIndexContainer'

const Routine = ({match}) => (
    <Layout
        header={(
            <title>Routine</title>
        )}
    >
        <RoutineIndexContainer
            routineSlug={match.params.routineSlug}
        />
    </Layout>
)

export default Routine
