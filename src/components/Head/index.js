import React from 'react'
import Helmet from 'react-helmet'

const Head = ({children}) => (
    <Helmet
        defaultTitle="doroutine | Create routines for your workout"
        titleTemplate="%s | doroutine"
    >
        {/* Keep in sync with public/index.html */}
        <meta name="description" content="Create gym routines and workouts. Keep track of sets, weight and reps for all your exercises. See your progress on your lifts over time." />
        {children}
    </Helmet>
)

export default Head
