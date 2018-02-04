import React from 'react'
import Helmet from 'react-helmet'

const Head = ({children}) => (
    <Helmet
        defaultTitle="doroutine | Create routines for your workout"
        titleTemplate="%s | doroutine"
    >
        <meta name="description" content="Gym routine creation. Keep track of your workouts, sets and exercises. Progress on your lifts." />
        {children}
    </Helmet>
)

export default Head
