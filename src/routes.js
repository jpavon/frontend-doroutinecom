import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from 'pages/Home'
import Routines from 'pages/Routines'
import Routine from 'pages/Routine'
import NoMatch from 'pages/NoMatch'

const getRoutes = (store) => {

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(props) => (
            store.getState().user.id ?
                <Component {...props} /> :
                <Redirect to='/login' />
        )} />
    )

    return (
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/routines" component={Routines} />
            <Route exact path="/r/:routineSlug" component={Routine} />
            <Route component={NoMatch}/>
        </Switch>
    )
}

const Routes = ({ store }) => (
    <Provider store={store}>
        {getRoutes(store)}
    </Provider>
)

Routes.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Routes
