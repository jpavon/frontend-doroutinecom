import * as React from 'react'

import { ErrorApp as StyledErrorApp, ErrorAppTitle } from './style'

const ErrorApp: React.SFC = () => (
    <StyledErrorApp>
        <ErrorAppTitle>Application error.</ErrorAppTitle>
        <p>
            Try reloading the page or contact support if this error keeps
            happening.
        </p>
    </StyledErrorApp>
)

export default ErrorApp
