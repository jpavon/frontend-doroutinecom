import React from 'react'
import Helmet from 'react-helmet'

import favicon from 'media/favicon.png'

const Head = () => (
    <Helmet
        defaultTitle="saveroutine | Homepage"
        titleTemplate="%s | saveroutine"
    >
        <link rel="shortcut icon" href={favicon} />
        <meta name="description" content="SaveRoutine" />
    </Helmet>
)

export default Head
