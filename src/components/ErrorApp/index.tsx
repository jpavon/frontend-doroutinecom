import * as React from 'react'

import './style.scss'

const ErrorApp: React.SFC<{}> = () => (
    <div className="error-app">
        <div className="error-app-title">Application error.</div>
        <p>Try reloading the page or contact support if this error keeps happening.</p>
    </div>
)

export default ErrorApp
