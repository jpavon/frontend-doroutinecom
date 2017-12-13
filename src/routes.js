import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from 'pages/Home'
import Login from 'pages/Login'
import Register from 'pages/Register'
import Routines from 'pages/Routines'
import Routine from 'pages/Routine'
import Settings from 'pages/Settings'
import NoMatch from 'pages/NoMatch'

class Routes extends Component {

    static propTypes = {
        isAuth: PropTypes.bool.isRequired
    }

    render() {
        const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
                this.props.isAuth ?
                    <Component {...props} /> :
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />
            )} />
        )

        const GuestRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
                !this.props.isAuth ?
                    <Component {...props} /> :
                    <Redirect to='/' />
            )} />
        )

        return (
            <Switch>
                <GuestRoute exact path="/login" component={Login} />
                <GuestRoute exact path="/register" component={Register} />

                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/routines" component={Routines} />
                <PrivateRoute exact path="/r/:routineSlug" component={Routine} />
                <PrivateRoute exact path="/settings" component={Settings} />

                <PrivateRoute component={NoMatch}/>
            </Switch>
        )
    }
}

export default Routes
