import React, { Component } from 'react'
import Layout from 'pages/Layout'

const Routines = () => (
    <Layout
        header={(
            <title>Routines</title>
        )}
        loader={() => import('containers/RoutinesContainer')}
    />
)

export default Routines
