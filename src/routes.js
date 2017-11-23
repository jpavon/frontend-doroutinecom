import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Home from 'pages/Home'
import Graphs from 'pages/Graphs'
import NoMatch from 'pages/NoMatch'

const Routes = ({ store }) => (
    <Provider store={store}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/graphs" component={Graphs} />
            <Route component={NoMatch}/>
        </Switch>
    </Provider>
)

Routes.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Routes
