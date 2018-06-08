import * as React from 'react'

import Layout from 'pages/Layout'
import NotFoundComponent from 'components/NotFound'

const NotFound = () => (
    <Layout header={<title>Not Found</title>}>
        <NotFoundComponent />
    </Layout>
)

export default NotFound
