import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Home from 'pages/Home'
import Workout from 'pages/Workout'
import Lifts from 'pages/Lifts'
import Lift from 'pages/Lift'
import NoMatch from 'pages/NoMatch'

const Routes = ({ store }) => (
    <Provider store={store}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/workouts/:id" component={Workout} />
            <Route exact path="/lifts" component={Lifts} />
            <Route exact path="/lifts/:id" component={Lift} />
            <Route component={NoMatch}/>
        </Switch>
    </Provider>
)

Routes.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Routes