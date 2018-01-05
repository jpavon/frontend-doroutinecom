import React from 'react'
import Layout from 'pages/Layout'
import NotFoundComponent from 'components/NotFound'

const NotFound = () => (
    <Layout
        header={(
            <title>404 - Not Found</title>
        )}
    >
        <NotFoundComponent />
    </Layout>
)

export default NotFound
