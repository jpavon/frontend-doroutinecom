import * as React from 'react'
import Helmet from 'react-helmet'

const Head = ({children = null}) => (
    <Helmet
        defaultTitle="doroutine | Keep track of your workouts"
        titleTemplate="%s | doroutine"
    >
        <html lang="en" />

        {/* Keep in sync with public/index.html */}
        <meta
            name="description"
            content="Workouts and routines creation web app for the gym.
            Keep track of sets, weight and reps for all your exercises.
            See your progress over time for your lifts."
        />

        {children}
    </Helmet>
)

export default Head
