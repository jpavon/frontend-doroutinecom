import * as React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import Layout from 'views/Layout'
import { NotFoundWrapper, NotFoundTitle } from './style'

const NotFound: React.SFC<RouteComponentProps<{}>> = () => (
    <Layout header={<title>Not Found</title>} e2e="not-found">
        <NotFoundWrapper>
            <NotFoundTitle>Page not found.</NotFoundTitle>
            <p>
                Try using the navigation above or going to the{' '}
                <Link to="/">homepage</Link>.
            </p>
        </NotFoundWrapper>
    </Layout>
)

export default NotFound
