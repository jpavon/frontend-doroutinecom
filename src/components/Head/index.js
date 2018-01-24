import React from 'react'
import Helmet from 'react-helmet'

const Head = ({children}) => (
    <Helmet
        defaultTitle="doroutine"
        titleTemplate="%s | doroutine"
    >
        <meta name="description" content="#todo" />
        {children}
    </Helmet>
)

export default Head
