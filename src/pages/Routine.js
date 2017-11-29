import React, { Component } from 'react'
import Layout from 'pages/Layout'

const Routine = () => (
    <Layout
        header={(
            <title>Routine</title>
        )}
        loader={() => import('containers/RoutineContainer')}
    />
)

export default Routine
