import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Home from 'pages/Home'
import Workout from 'pages/Workout'
import Lifts from 'pages/Lifts'
import NoMatch from 'pages/NoMatch'

// uncommented until https://github.com/gaearon/redux-devtools/issues/381
// let DevTools
// if (process.env.NODE_ENV !== 'production') DevTools = require('./DevTools').default;

const Root = ({ store }) => (
    <Provider store={store}>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/workouts/:id" component={Workout} />
                <Route exact path="/lifts" component={Lifts} />
                <Route component={NoMatch}/>
            </Switch>
            {/* process.env.NODE_ENV !== 'production' && <DevTools /> */}
        </div>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Root
