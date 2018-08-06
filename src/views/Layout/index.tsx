import * as React from 'react'
import { Helmet } from 'react-helmet'

import Alert from 'views/Layout/Alert'
import { Container } from './style'

interface Props {
    header: React.ReactNode
    e2e: string
}

const Layout: React.SFC<Props> = (props) => (
    <>
        <Helmet>{props.header}</Helmet>
        <Container data-e2e={props.e2e}>
            <Alert />
            {props.children}
        </Container>
    </>
)

export default Layout
