import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Home from 'pages/Home'
import Routines from 'pages/Routines'
import Routine from 'pages/Routine'
import NoMatch from 'pages/NoMatch'

const Routes = ({ store }) => (
    <Provider store={store}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/routines" component={Routines} />
            <Route exact path="/r/:routineSlug" component={Routine} />
            <Route component={NoMatch}/>
        </Switch>
    </Provider>
)

Routes.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Routes
