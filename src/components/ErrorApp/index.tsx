import * as React from 'react'

import { ErrorApp as StyledErrorApp, ErrorAppTitle } from './style'

const ErrorApp: React.SFC = () => (
    <StyledErrorApp>
        <ErrorAppTitle>Unexpected error</ErrorAppTitle>
        <p>
            Try reloading the page or contact support{' '}
            <a href="hello@doroutine.com">hello@doroutine.com</a> if this error
            keeps happening.
        </p>
    </StyledErrorApp>
)

export default ErrorApp
