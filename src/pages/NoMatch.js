import React from 'react'
import Layout from 'pages/Layout'

const NoMatch = () => (
    <Layout
        header={(
            <title>NoMatch</title>
        )}
        loader={() => import('components/ErrorNoMatch')}
    />
)

export default NoMatch
