import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Home from 'pages/Home'
import Workout from 'pages/Workout'
import Lifts from 'pages/Lifts'
import NoMatch from 'pages/NoMatch'

const Root = ({ store }) => (
    <Provider store={store}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/workouts/:id" component={Workout} />
            <Route exact path="/lifts" component={Lifts} />
            <Route component={NoMatch}/>
        </Switch>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Root
