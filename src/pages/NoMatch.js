import React from 'react'
import Layout from 'pages/Layout'
import ErrorNoMatch from 'components/ErrorNoMatch'

const NoMatch = () => (
    <Layout
        header={(
            <title>NoMatch</title>
        )}
    >
        <ErrorNoMatch />
    </Layout>
)

export default NoMatch
