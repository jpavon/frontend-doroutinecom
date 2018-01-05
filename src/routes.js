import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'

import Login from 'pages/Auth/Login'
import Register from 'pages/Auth/Register'
import PasswordForgotten from 'pages/Auth/PasswordForgotten'
import PasswordReset from 'pages/Auth/PasswordReset'
import Routines from 'pages/Routines'
import Routine from 'pages/Routine'
import Settings from 'pages/Settings'
import NotFound from 'pages/NotFound'

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
                            state: { from: props.location.pathname }
                        }}
                    />
            )} />
        )

        const GuestRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
                !this.props.isAuth ?
                    <Component {...props} /> :
                    <Redirect
                        to={
                            (props.location.state && props.location.state.from) ?
                            props.location.state.from :
                            '/'
                        }
                    />
            )} />
        )

        return (
            <Switch>
                <GuestRoute exact path="/login" component={Login} />
                <GuestRoute exact path="/register" component={Register} />
                <GuestRoute exact path="/password-forgotten" component={PasswordForgotten} />
                <GuestRoute exact path="/password-reset/:token" component={PasswordReset} />

                <PrivateRoute exact path="/" component={Routines} />
                <PrivateRoute exact path="/r/:routineSlug" component={Routine} />
                <PrivateRoute exact path="/settings" component={Settings} />

                <PrivateRoute component={NotFound}/>
            </Switch>
        )
    }
}

export default Routes
