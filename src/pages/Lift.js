import React from 'react'
import Layout from 'pages/Layout'
import LiftContainer from 'containers/LiftContainer'

const Lift = ({match}) => (
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
