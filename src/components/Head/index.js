import React from 'react'
import Helmet from 'react-helmet'

import favicon from 'media/favicon.png'

const Head = () => (
    <Helmet
        defaultTitle="doroutine"
        titleTemplate="%s | doroutine"
    >
        <link rel="shortcut icon" href={favicon} />
        <meta name="description" content="#todo" />
    </Helmet>
)

export default Head
